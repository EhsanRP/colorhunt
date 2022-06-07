import React, {useContext, useEffect, useState} from 'react';
import Card from "../shared/Card"
import {fetchPalettesByCategoryId} from "../../functions/paletteApiCalls";
import "./Category.css"
import Loading from "../loading/Loading";
import {LikeContext} from "../../context/LikeContext";
import {useParams} from "react-router-dom";

const Category = () => {

    const {dispatch, likeChecker} = useContext(LikeContext)
    const [data, setData] = useState(null)

    const {categoryId} = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await fetchPalettesByCategoryId(categoryId);
            setData(result)
        }

        fetchApi()
    }, [categoryId])
    return (<div className="home">
            <div className="palettesContainer">
                {data == null && <Loading/>}
                {data !== null && data.length ? data.map(item => <Card key={item.id}
                                                                       palette={item}
                                                                       dispatch={dispatch}
                                                                       likeChecker={likeChecker}/>) :
                    <p>Nothing to show</p>}

            </div>
            <div className="rightSide">

            </div>
        </div>


    );
};

export default Category;