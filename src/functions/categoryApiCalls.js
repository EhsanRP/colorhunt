import axios from "axios";

const BASE_URL = "https://colorhunt-equadesign.fandogh.cloud/api/v1/categories"
const LOCAL_BASE_URL = "http://127.0.0.1:8080/api/v1/categories"

export const fetchCategories = async () => {
    const uri = `${BASE_URL}/all`
    const response = await axios.get(uri, {params: {approval: true}})
    return response.data
}
