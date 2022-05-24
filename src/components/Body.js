import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom"
import Sidebar from "./sidebar/Sidebar";
import "./Body.css"
import Home from "./home/Home";
import RightSide from "./rightSide/RightSide";
import {LikeContext} from "../context/LikeContext";

const Body = () => {


    return (
        <div>
            <main>
                <div className="container">
                    <Sidebar/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>

                    <RightSide/>
                </div>
            </main>
        </div>
    );
};

export default Body;