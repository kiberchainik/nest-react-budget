import { FC } from 'react'
import { Form } from 'react-router-dom'
import styles from './loan.module.scss'

const FormLoan:FC = () => {
  return (
    <div className='rounded-md bg-slate-800 p-5'>
        <Form className='flex flex-col gap-3' method='post' action='/loan'>
            <label htmlFor="title" className={styles.inputFormLabel}>
                <span>Название</span>
                <input type="text" name="title" className="input" placeholder='Название ...' required />
            </label>
            <label htmlFor="amount" className={styles.inputFormLabel}>
                <span>Сумма</span>
                <input type="number" name="amount" className="input" placeholder='Сумма ...' required />
            </label>
            <div className={styles.radioBlock}>
                <label htmlFor="borrow" className={styles.labelRadio}>
                    <input type="radio" name="type" id='borrow' value={"borrow"} className='form-radio text-blue-600' />
                    <span>Взял в долг</span>
                </label>
                <label htmlFor="lend" className={styles.labelRadio}>
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