import React, {useEffect, useState} from 'react';
import "./Categories.css"
import {fetchCategories} from "../../functions/categoryApiCalls";
import {NavLink} from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchAll = async () => {
            const data = await fetchCategories()
            setCategories(data)
        }

        fetchAll()

    }, [])

    return (
        <div className="categoryMenu">
            <ul className="categories">
                {
                    categories.map(item =>
                        <li key={item.id}>
                            <NavLink to={`${item.id}/category/`}
                                     className={({isActive}) => isActive ? "categoryMenu activeCategory" : "categoryMenu"}>
                                {item.name}
                            </NavLink>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Categories;