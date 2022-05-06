import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/category"

export const fetchCategories = async () => {
    const response = await axios.get(`${BASE_URL}/all`)
    return response.data
}