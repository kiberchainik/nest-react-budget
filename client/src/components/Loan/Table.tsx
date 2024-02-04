import { FC } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { IResponseLoanLoader } from '../../types/types'
import { formatToEuro } from '../../helpers/currency.helper'
import styles from './loan.module.scss'

const TableLoan:FC = () => {
  const {dataLoan, totalBorrow, totalLend} = useLoaderData() as IResponseLoanLoader
  return (
    <div className={styles.loanStatistic}>
        <div className="grid grid-cols-2 gap-3">
            <div className='text-md'>
              <p className={styles.numTitle}>Общая сумма долга:</p>
              <p className={styles.numBorrow}>{formatToEuro.format(totalBorrow)}</p>
            </div>
            <div className='text-md'>
              <p className={styles.numTitle}>Общая сумма займов:</p>
              <p className={styles.numLend}>{formatToEuro.format(totalLend)}</p>
            </div>
        </div>
        <div className='overflow-auto'>
            <table className='w-full mt-5'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Сумма</th>
                        <th>Тип</th>
                        <th>Дата</th>
                        <th className='text-right'>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {dataLoan.map((loan, idx) => (
                        <tr>
                            <td>{idx+1}</td>
                            <td>{loan.title}</td>
                            <td>{formatToEuro.format(loan.amount)}</td>
                            <td>{loan.type === 'borrow' ? 'Взял в долг' : 'Одолжил'}</td>
                            <td>{loan.createdAt}</td>
                            <td>
                                <Form method='delete' action='/loan'>
                                    <input type="hidden" name="id" value={loan.id} />
                                    <input type="hidden" name="type" value={loan.type} />
                                    <button className='btn hover:btn-red ml-auto'><FaTrash /></button>
                                </Form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableLoan