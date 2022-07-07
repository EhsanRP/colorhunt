import React from 'react';
import {Route, Routes} from "react-router-dom"
import Sidebar from "./sidebar/Sidebar";
import "./Body.css"
import Home from "./home/Home";
import Palette from "./palette/Palette";
import Footer from "./footer/Footer";

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
                        <Route path="/showPalette/:id" element={<Palette/>}/>
                    </Routes>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Body;