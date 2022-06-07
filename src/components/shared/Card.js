import React, {useEffect, useState} from 'react';
import "./Card.css"
import {dislikePalette, fetchPaletteById, likePalette} from "../../functions/paletteApiCalls";
import {type} from "@testing-library/user-event/dist/type";

const Card = (props) => {

    const {id} = props.palette
    const [palette, setPalette] = useState({})
    const {dispatch, likeChecker} = props;
    const [isLiked, setIsLiked] = useState(false)
    const [likeChange, setLikeChange] = useState(false)

    useEffect(() => {
        const fetchPalette = async () => {
            const data = await fetchPaletteById(id);
            setPalette(data)
        }
        const checkLiked = () => {
            const checkLiked = likeChecker(id)
            setIsLiked(checkLiked)
        }
        fetchPalette()
        checkLiked()

    }, [likeChange])


    const copyData = (event) => {
        const colorCode = event.target.innerHTML
        navigator.clipboard.writeText(event.target.innerHTML)

        event.target.innerHTML = "Copied!"
        setTimeout(() => {
            event.target.innerHTML = colorCode
        }, 1000)
    }

    const likeHandler = async () => {
        let response = null
        const handleLike = async () => {
            if (isLiked) {
                dispatch({type: "DISLIKE", payload: id})
                response = await dislikePalette(id)
            } else {
                dispatch({type: "LIKE", payload: id})
                response = await likePalette(id)
            }
        }
        await handleLike()

        do {

        }
        while (response == null)

        setLikeChange(!likeChange)
    }

    return (<div className="palette">
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
                {isLiked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                <span>{palette.likes}</span>
            </div>

            <span className="text-muted">
                    Today
                </span>

        </div>


    </div>);
};

export default Card;