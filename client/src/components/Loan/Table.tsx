import { FC } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { IResponseLoanLoader } from '../../types/types'
import { formatToEuro } from '../../helpers/currency.helper'

const TableLoan:FC = () => {
  const {dataLoan, totalBorrow, totalLend} = useLoaderData() as IResponseLoanLoader
  return (
    <div className='bg-slate-800 px-4 py-3 mt-4 rounded-md'>
        <div className="grid grid-cols-2 gap-3">
            <div className='text-md'>
              <p className='text-center font-bold uppercase'>Общая сумма долга:</p>
              <p className="rounded-sm mt-2 bg-red-600 p-1 text-center">{formatToEuro.format(totalBorrow)}</p>
            </div>
            <div className='text-md'>
              <p className='text-center font-bold uppercase'>Общая сумма займов:</p>
              <p className="rounded-sm mt-2 bg-green-600 p-1 text-center">{formatToEuro.format(totalLend)}</p>
            </div>
        </div>
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
  )
}

export default TableLoan