import axios from "axios";
import { getTokenFromLS } from "../helpers/localStorage.helper";

export const instance = axios.create({
    baseURL:'http://localhost:3001/api',
    headers: {
        Authorization: `Bearer ` + getTokenFromLS()
    }
})