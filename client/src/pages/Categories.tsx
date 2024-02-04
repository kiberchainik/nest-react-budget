import { FC, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Modal from '../components/Modal/Modal'
import { ICategory } from '../types/types'
import Category from '../components/Categories/Category'

const Categories:FC = () => {
  const categories = useLoaderData() as ICategory[]
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isPatch, setIsPatch] = useState<boolean>(false)
  const [catId, setCatId] = useState<number>(0)
  return (
    <>
      <div className='mt-10 rounded-md bg-slate-800 p-4'>
        <h1>Категории</h1>
        <Category 
          catId={catId} 
          categories={categories} 
          setCatId={setCatId}
          setIsOpen={setIsOpen}
          setIsPatch={setIsPatch} />
      </div>
      {isOpen && <Modal type='post' setIsOpen={setIsOpen} />}
      {isPatch && isOpen && <Modal type='patch' id={catId} setIsOpen={setIsOpen} />}
    </>
  )
}

export default Categories