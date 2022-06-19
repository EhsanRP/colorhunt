import React from 'react';
import {Route, Routes} from "react-router-dom"
import Sidebar from "./sidebar/Sidebar";
import "./Body.css"
import Home from "./home/Home";
//import Popular from "./popular/Popular";
//import Random from "./Random/Random";
//import Category from "./category/Category";
//import Palette from "./palette/Palette";

const Body = () => {


    return (
        <div>
            <main>
                <div className="container">
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/:pageName" element={<Home/>}/>
                        <Route path="/:categoryId/category" element={<Home/>}/>
                    </Routes>

                </div>
            </main>
        </div>
    );
};

export default Body;