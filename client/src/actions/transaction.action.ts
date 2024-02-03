import { toast } from "react-toastify"
import { instance } from "../api/axios.api"

export const transactionAction = async({request}:any) => {
    switch(request.method) {
      case 'POST': {
        const formData = await request.formData()
        const typeText = formData.get('type') === 'income' ? "Доход" : "Расход"
        const newTransaction = {
          title: formData.get('title'),
          amount: +formData.get('amount'),
          type: formData.get('type'),
          category: formData.get('category')
        }
        await instance.post('/transactions', newTransaction)
        toast.success(`${typeText} успешно добавлен`)
        return null
      }
      case 'DELETE': {
        const formData = await request.formData()
        const trsId = formData.get('id')
        const type = formData.get('type')
        await instance.delete(`/transactions/transaction/${trsId}`)
        const typeText = type === 'income' ? 'Доход' : 'Расход'
        toast.success(`${typeText} успешно удален`)
        return null
      }
    }
}  