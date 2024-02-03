import { FC } from "react"
import Form from "../components/Loan/Form"
import Table from "../components/Loan/Table"

const Loan:FC = () => {
  //const {totalIncome, totalExpense} = useLoaderData() as IResponseTransactionLoader
  return (
    <>
      <div className='mt-4 items-start gap-4'>
        <div className="bg-slate-800">
          <Form />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </>
  )
}

export default Loan