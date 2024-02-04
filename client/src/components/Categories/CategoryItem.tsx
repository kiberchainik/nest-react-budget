import { FC } from 'react'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md'
import { Form } from 'react-router-dom'
import { ICategory } from '../../types/types'
import styles from './category.module.scss'

type TCategoryItemProps = {
    catId:number
    cat: ICategory
    setCatId:(val:number) => void
    setIsOpen:(val:boolean) => void
    setIsPatch:(val:boolean) => void
}

const CategoryItem:FC<TCategoryItemProps> = ({cat, catId, setCatId, setIsOpen, setIsPatch}) => {
  return (
    <div className="group relative flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2">
        {cat.title}
        <div className='absolute hidden bottom-0 left-0 right-0 top-0 group-hover:flex items-center justify-between rounded-lg bg-black/90 px-3'>
        <button onClick={() => {
            setCatId(cat.id)
            setIsOpen(true)
            setIsPatch(true)
            }}
        ><MdModeEdit /></button>
        <Form className='flex' method='delete' action='/categories'>
            <input type="hidden" name='id' value={cat.id} />
            <button type="submit"><MdDeleteForever /></button>
        </Form>
        </div>
    </div>
  )
}

export default CategoryItem