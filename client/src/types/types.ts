import { ChangeEvent, Dispatch, SetStateAction } from "react"

export interface IUser {
    id: number
    email: string
    login: string
    access_token:string
}

export interface IUserData {
    email:string
    login: string
    password: string
}

export interface IResponseUser {
    email:string
    login: string
    createdAt: string
    updatedAt: string
    id:number
    isAuth: boolean
    message: string
}

export interface IUserRegistrationResponseData {
    access_token: string
    user: IResponseUser
}

type TFormDataProps = {
    email: string
    password: string
    isAuth:boolean
    setIsAuth: Dispatch<SetStateAction<boolean>>
    setIsRegister: Dispatch<SetStateAction<boolean>>
    isRegister:boolean
}

export type TFormLoginDataProps = TFormDataProps & {
    handleChangeLoginData: (e:ChangeEvent<HTMLInputElement>) => void
}

export type TFormRegisterDataProps = TFormDataProps & {
    login:string
    handleChangeRegisterData: (e:ChangeEvent<HTMLInputElement>) => void
}

export interface ILoan {
    id: number
    title: string
    amount: number
    type: string
    createdAt: string
    updatedAt:string
}

export interface IResponseLoanLoader {
    dataLoan: ILoan[]
    totalBorrow: number
    totalLend: number
}

export interface ICategory {
    title:string
    id:number
    createdAt:string
    updatedAt:string
    transactions?: []
}


export interface ITransaction {
    amount:number
    createdAt:string
    updatedAt:string
    title:string
    type: string
    id:number
    category: ICategory
}

export interface IResponseTransactionLoader {
    categories: ICategory[]
    transactions: ITransaction[]
    totalIncome: number
    totalExpense: number
}