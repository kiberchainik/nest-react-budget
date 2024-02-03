import { instance } from "../api/axios.api"

export const categoriesAction = async({request}:any) => {
    switch(request.method) {
      case 'POST': {
        const formData = await request.formData()
        const title = {
          title: formData.get('title')
        }
        await instance.post('/categories', title)
        return null
      }
      case 'PATCH': {
        const formData = await request.formData()
        const category = {
          id: formData.get('id'),
          title: formData.get('title')
        }
        await instance.patch(`/categories/category/${category.id}`, category)
        return null
      }
      case 'DELETE': {
        const formData = await request.formData()
        const categoryId = formData.get('id')
        await instance.delete(`/categories/category/${categoryId}`)
        return null
      }
    }
  }