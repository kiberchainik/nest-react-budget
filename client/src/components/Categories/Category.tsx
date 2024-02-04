import { ICategory } from '../../types/types'
import { FaPlus } from 'react-icons/fa'
import { FC } from 'react'
import CategoryItem from './CategoryItem'

type TCategoryProps = {
    categories: ICategory[]
    setCatId: (val:number) => void
    setIsOpen: (val:boolean) => void
    setIsPatch: (val:boolean) => void
    catId:number
}

const Category:FC<TCategoryProps> = ({categories, catId, setCatId, setIsOpen, setIsPatch}) => {
  return (
    <>
        <div className='mt-2 flex flex-wrap flex-row items-center gap-2'>
          {categories.map((cat, idx) => (
            <CategoryItem
                catId={catId}
                cat={cat}
                setCatId={setCatId}
                setIsOpen={setIsOpen}
                setIsPatch={setIsPatch}
                key={idx} />
          ))}
        </div>
        <button onClick={() => {
            setIsOpen(true)
            setIsPatch(false)
          }} className='mt-5 flex max-w-fit items-center gap-2 text-white/50 hover:text-white'>
          <FaPlus />
          <span>Добавить категорию</span>
        </button>
    </>
  )
}

export default Category