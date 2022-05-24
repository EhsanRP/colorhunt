import {validateGetMethod} from "./apiCallValidate";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/palettes"

export const fetchPalettes = async () => {
    let response = null
    const uri = `${BASE_URL}/all`
    response = await validateGetMethod(uri)
    return response.data
}

export const fetchPaletteById = async (id) => {
    let response = null
    const uri = `${BASE_URL}/${id}`
    response = await validateGetMethod(uri)
    return response.data
}

export const likePalette = (id) => {
    const uri = `${BASE_URL}/like/${id}`
    fetch(uri, {method: "PUT"})
        .then(response => console.log(response))

}

export const dislikePalette = (id) => {
    const uri = `${BASE_URL}/dislike/${id}`
    fetch(uri, {method: "PUT"})
        .then(response => console.log(response))

}
