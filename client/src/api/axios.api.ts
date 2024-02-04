import axios from "axios";
import { getTokenFromLS } from "../helpers/localStorage.helper";

export const instance = axios.create({
    baseURL:'https://personal-budget-aawj.onrender.com/api',
    headers: {
        Authorization: `Bearer ` + getTokenFromLS()
    }
})