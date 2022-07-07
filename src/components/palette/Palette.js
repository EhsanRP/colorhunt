import React, {useContext, useEffect, useState} from 'react';
import "./Palette.css"
import {fetchPaletteById} from "../../functions/paletteApiCalls";
import {useParams} from "react-router-dom";
import {PaletteContext} from "../../context/PaletteContext";
import Random from "../familiars/Random";

const Palette = () => {

    const {id} = useParams()
    const [palette, setPalette] = useState({})
    const [isLiked, setIsLiked] = useState(false)
    const {dispatch, likes} = useContext(PaletteContext)

    useEffect(() => {

        window.scroll(0, 0)

        const fetchPalette = async () => {
            const data = await fetchPaletteById(id)
            dispatch({type: "INIT", payload: {content: [data]}})
            setPalette(data)
        }

        fetchPalette()
        setIsLiked(!!likes.includes(Number(id)))
    }, [id])


    const copyData = (event) => {
        navigator.clipboard.writeText(event.target.id)

        event.target.innerHTML = "Copied!"
        setTimeout(() => {
            event.target.innerHTML = event.target.id
        }, 1000)
    }


    const likeHandler = () => {

        if (isLiked) {
            dispatch({type: "DISLIKE", palette: palette})
            setIsLiked(false)
        } else {
            dispatch({type: "LIKE", palette: palette})
            setIsLiked(true)
        }
    }

    const hextToRGB = hex => {
        if (!hex)
            return null
        return `RGB(${hex.match(/\w\w/g).map(x => +`0x${x}`)})`
    }

    return (
        <div className="home">
            <div className="paletteDetails">
                <div className="paletteDetailsColors">
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

                <div className="paletteActions">
                    <div className="btn-sm" onClick={likeHandler}>
                        {isLiked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                        <span>{palette.likes}</span>
                    </div>
                    <div className="btn-sm">
                        <i className="bi bi-download"></i>
                        <span>Image</span>
                    </div>

                    <div className="btn-sm">
                        <i className="bi bi-link-45deg"></i>
                        <span>Link</span>
                    </div>

                </div>

                <div className="colorDetails">
                    <div className="miniCircles">
                        <div className="colorThumbnail" style={{backgroundColor: palette.color1}}></div>
                        <div className="colorThumbnail" style={{backgroundColor: palette.color2}}></div>
                        <div className="colorThumbnail" style={{backgroundColor: palette.color3}}></div>
                        <div className="colorThumbnail" style={{backgroundColor: palette.color4}}></div>
                    </div>
                    <div className="colorCodes">
                        <span>{palette.color1}</span>
                        <span>{palette.color2}</span>
                        <span>{palette.color3}</span>
                        <span>{palette.color4}</span>
                    </div>
                    <div className="rgbCode">
                        <span>{hextToRGB(palette.color1)}</span>
                        <span>{hextToRGB(palette.color2)}</span>
                        <span>{hextToRGB(palette.color3)}</span>
                        <span>{hextToRGB(palette.color4)}</span>
                    </div>
                </div>
            </div>
            <span className="randomLead">You Might Also Like</span>
            <Random/>
        </div>
    );
};

export default Palette;