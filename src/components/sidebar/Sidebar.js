import React from 'react';
import SideMenu from "./SideMenu";
import Categories from "./Categories";
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebarContainer">
            <SideMenu/>
            <Categories/>
        </div>
    );
};

export default Sidebar;