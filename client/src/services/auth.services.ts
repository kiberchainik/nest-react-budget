import { instance } from "../api/axios.api";
import { IUserData, IUserRegistrationResponseData, IUser } from "../types/types";

export const AuthService = {
    async registration(userData:IUserData):Promise<IUserRegistrationResponseData> {
        const {data} = await instance.post<IUserRegistrationResponseData>('user', userData)
        return data
    },
    async login(email:string, password:string):Promise<IUser> {
        const {data} = await instance.post<IUser>('auth/login', {email, password})
        return data
    },
    async getProfile():Promise<IUser | undefined> {
        const {data} = await instance.get<IUser>('auth/profile')
        if(data) return data
    }
}