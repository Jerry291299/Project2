import axios from "axios";
export const axiosservice = axios.create({
    baseURL:'http://localhost:3000/'
})