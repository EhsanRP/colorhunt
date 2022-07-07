import React, {useEffect, useState} from 'react';
import {fetchRandom} from "../../functions/paletteApiCalls";
import "./Random.css"
import {Link} from "react-router-dom";
import OpenPaletteButton from "../shared/OpenPaletteButton";

const Random = () => {

    const [randoms, setRandoms] = useState([]);

    useEffect(() => {
        const fetchRandoms = async () => {
            const data = await fetchRandom(0)
            setRandoms(data.content.slice(0, 8))
        }
        fetchRandoms()

        setRandoms(randoms.slice(0, 7))
    }, [])

    const copyData = (event) => {
        navigator.clipboard.writeText(event.target.id)

        event.target.innerHTML = "Copied!"
        setTimeout(() => {
            event.target.innerHTML = event.target.id
        }, 1000)
    }

    return (
        <div className="randomsGrid">
            {
                randoms.length &&
                randoms.map(palette =>
                    <div className="ThumbnailContainer">
                        <div key={palette.id} className="paletteThumbnail">
                            <div className="color color1" style={{backgroundColor: `${palette.color1}`}}>
                                <span id={palette.color1} onClick={copyData}>{palette.color1}</span>
                            </div>
                            <div className="color color2" style={{backgroundColor: `${palette.color2}`}}>
                                <span id={palette.color2} onClick={copyData}>{palette.color2}</span>
                            </div>
                            <div className="color color3" style={{backgroundColor: `${palette.color3}`}}>
                                <span id={palette.color3} onClick={copyData}>{palette.color3}</span>
                            </div>
                            <div className="color color4" style={{backgroundColor: `${palette.color4}`}}>
                                <span id={palette.color4} onClick={copyData}>{palette.color4}</span>
                            </div>
                        </div>
                        <OpenPaletteButton id={palette.id}/>
                    </div>
                )
            }
        </div>
    );
};

export default Random;