import { FC } from 'react'
import Form from '../components/Transactions/Form'
import Table from '../components/Transactions/Table'
import { useLoaderData } from 'react-router-dom'
import { formatToEuro } from '../helpers/currency.helper'
import { IResponseTransactionLoader } from '../types/types'
import Chart from '../components/Transactions/Chart'

const Transactions:FC = () => {
  const {totalIncome, totalExpense} = useLoaderData() as IResponseTransactionLoader
  return (
    <>
      <div className='mt-4 grid grid-cols-3 items-start gap-4'>
        <div className="col-span-2 grid">
          <Form />
        </div>
        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div className='text-md'>
              <p className='text-center font-bold uppercase'>Общий доход:</p>
              <p className="rounded-sm mt-2 bg-green-600 p-1 text-center">{formatToEuro.format(totalIncome)}</p>
            </div>
            <div className='text-md'>
              <p className='text-center font-bold uppercase'>Общий расход:</p>
              <p className="rounded-sm mt-2 bg-red-600 p-1 text-center">{formatToEuro.format(totalExpense)}</p>
            </div>
          </div>
          <Chart totalExpense={totalExpense} totalIncome={totalIncome} />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </>
  )
}

export default Transactions