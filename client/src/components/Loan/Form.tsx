import { FC } from 'react'
import { Form } from 'react-router-dom'

const FormLoan:FC = () => {
  return (
    <div className='rounded-md bg-slate-800 p-5'>
        <Form className='grid gap-2' method='post' action='/loan'>
            <label className='grid' htmlFor="title">
                <span>Название</span>
                <input type="text" name="title" className="input" placeholder='Название ...' required />
            </label>
            <label className='grid' htmlFor="amount">
                <span>Сумма</span>
                <input type="number" name="amount" className="input" placeholder='Сумма ...' required />
            </label>
            <div className='flex gap-4 items-center'>
                <label htmlFor="borrow" className="flex cursor-pointer items-center gap-2">
                    <input type="radio" name="type" id='borrow' value={"borrow"} className='form-radio text-blue-600' />
                    <span>Взял в долг</span>
                </label>
                <label htmlFor="lend" className="flex cursor-pointer items-center gap-2">
                    <input type="radio" name="type" id='lend' value={"lend"} className='form-radio text-blue-600' />
                    <span>Одолжил</span>
                </label>
            </div>
            <button className='btn btn-green mt-2 max-w-fit'>Добавить</button>
        </Form>
    </div>
  )
}

export default FormLoan