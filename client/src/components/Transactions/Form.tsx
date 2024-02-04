import { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader } from '../../types/types'
import Modal from '../Modal/Modal'
import styles from './transaction.module.scss'

const TransactionForm:FC = () => {
  const {categories} = useLoaderData() as IResponseTransactionLoader
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  return (
    <div className='rounded-md bg-slate-800 p-5 w-full'>
        <Form className={styles.transactionForm} method='post' action='/transactions'>
            <label className='grid' htmlFor="title">
                <span>Название</span>
                <input type="text" name="title" className="input" placeholder='Название ...' required />
            </label>
            <label className='grid' htmlFor="amount">
                <span>Сумма</span>
                <input type="number" name="amount" className="input" placeholder='Сумма ...' required />
            </label>
            {categories.length ? 
                <label htmlFor="category" className='grid'>
                    <span>Категории</span>
                    <select name="category" required className='input text-slate-500'>
                        <option key={0} value={0}>Выбрать категорию</option>
                        {categories.map(ctg => (
                            <option key={ctg.id} value={ctg.id}>{ctg.title}</option>
                        ))}
                    </select>
                </label>
                :
                <h1 className='mt-1 text-red-500'>Для продолжения нужно добавить категории</h1>
            }
            <button onClick={() => setIsOpen(true)} className='mt-2 flex max-w-fit items-center gap-2 text-white/50 hover:text-white'>
                <FaPlus /> <span>Добавить категорию</span>
            </button>
            <div className={styles.radioBlock}>
                <label htmlFor="income" className="flex cursor-pointer items-center gap-2">
                    <input type="radio" id='income' name="type" value={"income"} className='form-radio text-blue-600' /> <span>Доход</span>
                </label>
                <label htmlFor="expense" className="flex cursor-pointer items-center gap-2">
                    <input type="radio" id='expense' name="type" value={"expense"} className='form-radio text-blue-600' /> <span>Расход</span>
                </label>
            </div>
            <button className='btn btn-green mt-2 max-w-fit'>Добавить</button>
        </Form>
        {isOpen && <Modal type='post' setIsOpen={setIsOpen} />}
    </div>
  )
}

export default TransactionForm