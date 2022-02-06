import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://apikelasweb.herokuapp.com/api/"
})
