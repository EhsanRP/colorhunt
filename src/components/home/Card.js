import React, {useEffect, useState} from 'react';
import "./Card.css"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {fetchPaletteById} from "../../functions/paletteApiCalls";

const Card = ({id}) => {


    const [dateDifference, setDifference] = useState(0)
    const [isLiked, setLiked] = useState(false)
    const [palette, setPalette] = useState({})

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetchPaletteById(id)
            setPalette(response)
        }
        fetchApi()


    }, [isLiked])

    const setCreationDate = () => {
        let {creationDate} = palette
        creationDate = creationDate.split("-")
        creationDate[2] = creationDate[2].substring(0, 2)
        const dateString = `${creationDate[1]}/${creationDate[2]}/${creationDate[0]}`
        const date = new Date(dateString).getTime()
        const now = new Date().getTime()
        const difference = Math.floor((now - date) / (1000 * 3600 * 24))

        setDifference(difference)
    }

    const copyData = (event) => {

        const colorCode = event.target.innerHTML
        navigator.clipboard.writeText(event.target.innerHTML)

        event.target.innerHTML = "Copied!"
        setTimeout(() => {
            event.target.innerHTML = colorCode
        }, 1000)
    }

    const likeHandler = async () => {
        await axios.put(`http://127.0.0.1:8080/palettes/like/${id}`)
        setLiked(!isLiked)
    }

    return (
        <div className="palette">
            <div className="colors">
                <div className="color color1" style={{backgroundColor: `${palette.color1}`}}>
                    <span onClick={copyData}>{palette.color1}</span>
                </div>
                <div className="color color2" style={{backgroundColor: `${palette.color2}`}}>
                    <span onClick={copyData}>{palette.color2}</span>
                </div>
                <div className="color color3" style={{backgroundColor: `${palette.color3}`}}>
                    <span onClick={copyData}>{palette.color3}</span>
                </div>
                <div className="color color4" style={{backgroundColor: `${palette.color4}`}}>
                    <span onClick={copyData}>{palette.color4}</span>
                </div>
            </div>


            <div className="data">

                <div className="likes" onClick={likeHandler}>
                    {
                        isLiked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>
                    }
                    <span>{palette.likes}</span>
                </div>

                <span className="text-muted">
                    {
                        dateDifference ? `${dateDifference} Days` : "Today"
                    }
                </span>

            </div>


        </div>
    );
};

export default Card;