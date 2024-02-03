import { instance } from "../api/axios.api"
import { ILoan } from "../types/types"

export const loanLoader = async () => {
    const loan = await instance.get<ILoan[]>('/loan')
    const totalBorrow = await instance.get<number>('/loan/borrow')
    const totalLend = await instance.get<number>('/loan/lend')

    const data = {
        dataLoan: loan.data,
        totalBorrow: totalBorrow.data,
        totalLend: totalLend.data
    }

    return data
}