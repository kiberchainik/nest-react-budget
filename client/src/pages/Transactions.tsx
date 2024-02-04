import { FC } from 'react'
import { useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader } from '../types/types'
import Form from '../components/Transactions/Form'
import Table from '../components/Transactions/Table'
import Chart from '../components/Transactions/Chart'
import Statistic from '../components/Transactions/Statistic'

const Transactions:FC = () => {
  const {totalIncome, totalExpense} = useLoaderData() as IResponseTransactionLoader
  return (
    <>
      <div className='TransitionPageForm'>
        <div className="flex w-full">
          <Form />
        </div>
        <div className="rounded-md bg-slate-800 p-3">
          <Statistic totalIncome={totalIncome} totalExpense={totalExpense} />
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