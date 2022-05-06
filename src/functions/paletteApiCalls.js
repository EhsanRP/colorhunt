import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/palettes"

export const fetchPalettes = async () => {
    const response = await axios.get(`${BASE_URL}/all`)
    return response.data
}

export const fetchPaletteById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`)
    return response.data
}

export const likePalette = async (id) => {
    const response = await axios.put(`${BASE_URL}/${id}`)
}

export const dislikePalette = async (id) => {
    const response = await axios.put(`${BASE_URL}/dislike/${id}`)
}