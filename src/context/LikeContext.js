import React, {useEffect, useReducer} from 'react';
import {dislikePalette, likePalette} from "../functions/paletteApiCalls";

const getLikesArray = () => {
    const likesStr = localStorage.getItem("likes")
    return likesStr.split(",,")
}

const writeLikesArray = (array) => {
    localStorage.setItem("likes", array.join(",,"))
}

const initialState = []

const likeReducer = (state, action) => {
    let existingLikes = getLikesArray()

    const {payload} = action

    switch (action.type) {
        case "LIKE":
            if (existingLikes.includes(payload))
                return getLikesArray()

            existingLikes.push(payload)
            likePalette(payload)

            writeLikesArray(existingLikes)
            return [...existingLikes]
        case "DISLIKE":
            if (!existingLikes.includes(payload))
                return getLikesArray()

            existingLikes = existingLikes.filter(id => id !== payload)
            dislikePalette(payload)

            writeLikesArray(existingLikes)
            return [...existingLikes]

        default:
            return getLikesArray()
    }
}

export const LikeContext = React.createContext("");
const LikeContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(likeReducer, initialState)

    useEffect(() => {
        const storage = !!localStorage.getItem("likes")
        if (!storage)
            localStorage.setItem("likes", "")
    })

    const likeChecker = (id) => {
        return getLikesArray().includes(id)
    }

    return (
        <LikeContext.Provider value={{state, dispatch, likeChecker}}>
            {children}
        </LikeContext.Provider>
    );
};

export default LikeContextProvider;