import React from 'react';
import "./OpenPaletteButton.css"
import {Link} from "react-router-dom";

const OpenPaletteButton = ({id}) => {
    return (
        <div className="openPalette">
            <Link to={`/showPalette/${id}`}>Open <i className="bi bi-arrow-right-short"></i></Link>
        </div>
    );
};

export default OpenPaletteButton;