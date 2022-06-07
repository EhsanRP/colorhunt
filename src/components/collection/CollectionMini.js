import React, {useState} from 'react';
import "./CollectionMini.css"
import {LikeContext} from "../../context/LikeContext";

const CollectionMini = () => {

    const {state} = useState(LikeContext)
    console.log(state)

    return (
        <div className="collectionsMini">
            <span>Collection</span>
            <div className="thumbnailContainer">
                {
                }
            </div>
        </div>
    );
};

export default CollectionMini;