import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom"
import Sidebar from "./sidebar/Sidebar";
import "./Body.css"
import Home from "./home/Home";
import RightSide from "./rightSide/RightSide";
import {LikeContext} from "../context/LikeContext";
import Popular from "./popular/Popular";
import Random from "./Random/Random";
import Category from "./category/Category";

const Body = () => {


    return (
        <div>
            <main>
                <div className="container">
                    <Sidebar/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/popular" element={<Popular/>}/>
                        <Route path="/random" element={<Random/>}/>
                        <Route path="/category/:categoryId" element={<Category/>}/>
                    </Routes>

                    <RightSide/>
                </div>
            </main>
        </div>
    );
};

export default Body;