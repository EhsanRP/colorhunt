import React, {useEffect, useState} from 'react';
import Card from "./Card"
import {fetchPalettes} from "../../functions/paletteApiCalls";
import "./Home.css"
import Loading from "../loading/Loading";

const Home = () => {

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
                    data.length ? data.map(item => <Card key={item.id} id={item.id}/>) : <Loading/>
                }

            </div>
            <div className="rightSide">

            </div>
        </div>


    );
};

export default Home;