import { toast } from "react-toastify"
import { instance } from "../api/axios.api"

export const loanAction = async({request}:any) => {
    switch(request.method) {
      case 'POST': {
        const formData = await request.formData()
        const typeText = formData.get('type') === 'borrow' ? "Взятие в долг" : "Предоставление займа"
        const newLoan = {
          title: formData.get('title'),
          amount: +formData.get('amount'),
          type: formData.get('type')
        }
        await instance.post('/loan', newLoan)
        toast.success(`${typeText} успешно зафиксированно!`)
        return null
      }
      case 'DELETE': {
        const formData = await request.formData()
        const trsId = formData.get('id')
        const type = formData.get('type')
        await instance.delete(`/loan/${trsId}`)
        const typeText = type === 'borrow' ? "взятии в долг" : "предоставлении займа"
        toast.success(`Запись о ${typeText} успешно удалена`)
        return null
      }
    }
}  