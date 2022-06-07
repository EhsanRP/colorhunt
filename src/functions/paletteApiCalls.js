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

export const fetchPopular = async () => {
    let response = null
    const uri = `${BASE_URL}/popular`
    response = await validateGetMethod(uri)
    return response.data
}

export const fetchPalettesByCategoryId = async (categoryId) => {
    let response = null
    const uri = `${BASE_URL}/${categoryId}/all`
    response = await validateGetMethod(uri)
    return response.data
}

export const fetchRandom = async () => {
    let response = null
    const uri = `${BASE_URL}/random`
    response = await validateGetMethod(uri)
    return response.data
}

export const likePalette = async (id) => {
    const uri = `${BASE_URL}/like/${id}`
    return await axios.put(uri)

}

export const dislikePalette = async (id) => {
    const uri = `${BASE_URL}/dislike/${id}`
    const result = await axios.put(uri)
    console.log(result)
    return result
}
