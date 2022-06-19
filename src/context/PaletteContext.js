import React, {useEffect, useReducer, useState} from 'react';
import {dislikePalette, fetchPalettes, likePalette} from "../functions/paletteApiCalls";


const postLike = async (id) => {
    await likePalette(id)
}
const postDislike = async (id) => {
    await dislikePalette(id)
}

const initialLikes = "[]"

const likeHandler = (action, id) => {

    let likes = [...JSON.parse(localStorage.getItem("likes"))]
    switch (action) {
        case "LIKE":
            postLike(id)
            likes.push(id)
            break
        case "DISLIKE":
            postDislike(id)
            likes = likes.filter(item => item !== id)
            break

    }

    localStorage.setItem("likes", JSON.stringify(likes))
}

const initialState = []

const paletteReducer = (state, action) => {

    const {type, palette} = action
    let index = null

    switch (type) {
        case "LIKE":
            index = state.content.indexOf(palette)
            state.content[index].likes++

            likeHandler("LIKE", palette.id)

            return state

        case "DISLIKE":
            index = state.content.indexOf(palette)
            if (state.content[index].likes > 0)
                state.content[index].likes--
            likeHandler("DISLIKE", palette.id)

            return state
        case "INIT":
            return action.payload

    }
}

export const PaletteContext = React.createContext([])
const PaletteContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(paletteReducer, initialState)
    const [likes, setLikes] = useState([])

    useEffect(() => {
        const fetchAll = async () => {
            const data = await fetchPalettes(0)
            dispatch({type: "INIT", payload: data})
        }
        fetchAll(0)

        if (localStorage.getItem("likes") === null)
            localStorage.setItem("likes", initialLikes)

        setLikes(JSON.parse(localStorage.getItem("likes")))
    }, [])

    return (<PaletteContext.Provider value={{state, dispatch, likes}}>
        {
            state.content ? children : "loading"
        }
    </PaletteContext.Provider>);
};

export default PaletteContextProvider;