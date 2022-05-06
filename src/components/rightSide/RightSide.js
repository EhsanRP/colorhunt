import React from 'react';
import "./RightSide.css"
import CollectionMini from "../collection/CollectionMini";

const RightSide = () => {
    return (
        <div className="rightSide">
            <div className="rightTexts">
                <p className="lead">
                    Color Palettes for Designers and Artists
                </p>
                <p className="subLead">
                    Discover the newest hand-picked palettes of Color Hunt
                </p>
            </div>

            <CollectionMini/>
        </div>
    );
};

export default RightSide;