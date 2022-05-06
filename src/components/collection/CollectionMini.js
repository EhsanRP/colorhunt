import React from 'react';
import "./CollectionMini.css"
import Thumbnail from "./Thumbnail";

const CollectionMini = () => {
    return (
        <div className="collectionsMini">
            <span>Collection</span>
            <div className="thumbnailContainer">
                <Thumbnail/>
            </div>
        </div>
    );
};

export default CollectionMini;