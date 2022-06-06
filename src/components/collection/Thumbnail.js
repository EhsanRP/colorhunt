import React from 'react';
import "./Thumbnail.css"

const Thumbnail = () => {
    return (
        <div className="thumbnail">
            <div className="color1" style={{backgroundColor: "red"}}></div>
            <div className="color2" style={{backgroundColor: "blue"}}></div>
            <div className="color3" style={{backgroundColor: "black"}}></div>
            <div className="color4" style={{backgroundColor: "yellow"}}></div>
        </div>
    );
};

export default Thumbnail;