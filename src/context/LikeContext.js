import React, {useEffect, useReducer} from 'react';

const getLikesArray = () => {
    const likesStr = localStorage.getItem("likes")
    return likesStr.split(",,")
}

const writeLikesArray = (array) => {
    localStorage.setItem("likes", array.spread(",,"))
}

const initialState = []

const likeReducer = (state, action, payload) => {

    let existingLikes = getLikesArray()

    switch (action) {
        case "LIKE":
            if (existingLikes.includes(id => payload === id))
                return state

            existingLikes.push(payload)

            writeLikesArray(existingLikes)
            return [existingLikes]
        case "DISLIKE":
            if (!existingLikes.includes(id => payload === id))
                return state

            existingLikes = existingLikes.filter(id => id !== payload)

            writeLikesArray(existingLikes)
            return [existingLikes]

        default:
            return state
    }
}

export const LikeContext = React.createContext();
const LikeContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(likeReducer, initialState)

    useEffect(() => {
        const storage = !!localStorage.getItem("likes")
        if (!storage)
            localStorage.setItem("likes", "")
    })

    const likeChecker = (id) => {
        return !!getLikesArray().filter(item => item === id)
    }

    return (
        <LikeContext.Provider value={{state, dispatch, likeChecker}}>
            {children}
        </LikeContext.Provider>
    );
};

export default LikeContextProvider;