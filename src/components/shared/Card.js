import React, {useEffect, useState} from 'react';
import "./Card.css"
import {Link} from "react-router-dom";

const Card = (props) => {

    const {id, color1, color2, color3, color4, likes} = props.palette
    const {dispatch, likesContext} = props
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        setIsLiked(!!likesContext.includes(id))
    }, [])

    const copyData = (event) => {
        const colorCode = event.target.innerHTML
        navigator.clipboard.writeText(event.target.innerHTML)

        event.target.innerHTML = "Copied!"
        setTimeout(() => {
            event.target.innerHTML = colorCode
        }, 1000)
    }


    const likeHandler = () => {

        if (isLiked) {
            dispatch({type: "DISLIKE", palette: props.palette})
            setIsLiked(false)
        } else {
            dispatch({type: "LIKE", palette: props.palette})
            setIsLiked(true)
        }
    }

    return (<div className="palette">
        <div className="colors">
            <div className="color color1" style={{backgroundColor: `${color1}`}}>
                <span onClick={copyData}>{color1}</span>
            </div>
            <div className="color color2" style={{backgroundColor: `${color2}`}}>
                <span onClick={copyData}>{color2}</span>
            </div>
            <div className="color color3" style={{backgroundColor: `${color3}`}}>
                <span onClick={copyData}>{color3}</span>
            </div>
            <div className="color color4" style={{backgroundColor: `${color4}`}}>
                <span onClick={copyData}>{color4}</span>
            </div>
        </div>


        <div className="data">

            <div className="btn" onClick={likeHandler}>
                {isLiked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                <span>{likes}</span>
            </div>

            <Link to={`/showPalette/${id}`} className="openPalette">
                <i className="bi bi-arrow-up-right-square-fill"></i>
                <span className="textMuted">Open</span>
            </Link>

        </div>


    </div>);
};

export default Card;