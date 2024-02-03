import { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdModeEdit } from "react-icons/md"
import { MdDeleteForever } from "react-icons/md"
import { Form, useLoaderData } from 'react-router-dom'
import Modal from '../components/Modal/Modal'
import { ICategory } from '../types/types'

const Categories:FC = () => {
  const categories = useLoaderData() as ICategory[]
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isPatch, setIsPatch] = useState<boolean>(false)
  const [catId, setCatId] = useState<number>(0)
  return (
    <>
      <div className='mt-10 rounded-md bg-slate-800 p-4'>
        <h1>Категории</h1>
        <div className='mt-2 flex items-center gap-2'>
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative flex items-center gap-2 rounded-lg bg-slate-600 px-4 py-2">
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
          ))}
        </div>
        <button onClick={() => {
            setIsOpen(true)
            setIsPatch(false)
          }} className='mt-5 flex max-w-fit items-center gap-2 text-white/50 hover:text-white'>
          <FaPlus />
          <span>Добавить категорию</span>
        </button>
      </div>
      {isOpen && <Modal type='post' setIsOpen={setIsOpen} />}
      {isPatch && isOpen && <Modal type='patch' id={catId} setIsOpen={setIsOpen} />}
    </>
  )
}

export default Categories