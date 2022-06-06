import React, {useEffect, useState} from 'react';
import Card from "./Card"
import {fetchPalettes} from "../../functions/paletteApiCalls";
import "./Home.css"
import Loading from "../loading/Loading";
import {useContext} from "react";
import {LikeContext} from "../../context/LikeContext";

const Home = () => {

    const {dispatch, likeChecker} = useContext(LikeContext)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await fetchPalettes();
            setData(result)
        }

        fetchApi()
    }, [])
    return (
        <div className="home">
            <div className="palettesContainer">
                {
                    data.length ? data.map(item => <Card key={item.id}
                                                         palette={item}
                                                         dispatch={dispatch}
                                                         likeChecker={likeChecker}/>) : <Loading/>
                }

            </div>
            <div className="rightSide">

            </div>
        </div>


    );
};

export default Home;