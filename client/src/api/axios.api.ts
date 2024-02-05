import axios from "axios";
import { getTokenFromLS } from "../helpers/localStorage.helper";

export const instance = axios.create({
    baseURL:'https://personal-budget-h6at.onrender.com/api',
    headers: {
        Authorization: `Bearer ` + getTokenFromLS()
    }
})