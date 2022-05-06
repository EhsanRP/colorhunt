import React from 'react';
import {Link, NavLink} from "react-router-dom"
import "./SideMenu.css"

const SideMenu = () => {

    return (
        <div className="sideMenuContainer">
            <ul className="sideMenu">
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "link active" : "link"}>
                        <i className="bi bi-tag-fill"></i>
                        <span>New</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/popular" className={({isActive}) => isActive ? "link active" : "link"}>
                        <i className="bi bi-star-fill"></i>
                        <span>Popular</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/random" className={({isActive}) => isActive ? "link active" : "link"}>
                        <i className="bi bi-dice-5-fill"></i>
                        <span>Random</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/collection" className={({isActive}) => isActive ? "link active" : "link"}>
                        <i className="bi bi-collection-fill"></i>
                        <span>Collection</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;