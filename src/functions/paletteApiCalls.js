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

export const fetchAllPalettesById = async (idList) => {
    const uri = `${BASE_URL}/list/all`
    let response = null
    do {
        response = axios.get(uri, {
            params: {
                idList: idList
            }
        })
            .catch((error) => {

                return null
            })
    } while (response === null)
    console.log(response.data)
    return response.data
}

export const likePalette = async (id) => {
    const uri = `${BASE_URL}/like/${id}`
    const result = await axios.put(uri)
    console.log(result)
    return result

}

export const dislikePalette = async (id) => {
    const uri = `${BASE_URL}/dislike/${id}`
    const result = await axios.put(uri)
    console.log(result)
    return result
}
