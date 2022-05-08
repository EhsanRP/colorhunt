import axios from "axios";
import {validateGetMethod} from "./apiCallValidate";

const BASE_URL = "http://127.0.0.1:8080/category"

export const fetchCategories = async () => {
    let response = null
    const uri = `${BASE_URL}/all`
    response = await validateGetMethod(uri)
    return response.data
}