import { FC, useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader, ITransaction } from '../../types/types'
import {formatDate} from '../../helpers/date.helper'
import { formatToEuro } from '../../helpers/currency.helper'
import { instance } from '../../api/axios.api'
import ReactPaginate from 'react-paginate'

const Table:FC = () => {
  const {transactions} = useLoaderData() as IResponseTransactionLoader
  
  const [data, setData] = useState<ITransaction[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(0)

  const fetchTransactions = async (page:number) => {
    const res = await instance.get(`/transactions/pagination?page=${page}&limit=${10}`)
    setData(res.data)

    setTotalPage(Math.ceil(transactions.length / 10))
  }

  const handlePageChange = (selectedItem:{selected: number}) => {
    setCurrentPage(selectedItem.selected + 1)
  }

  useEffect(() => {
    fetchTransactions(currentPage)
  }, [currentPage, transactions])

  return (
    <>
        <ReactPaginate 
            className='mt-4 flex items-center justify-end gap-3'
            activeClassName='bg-blue-600 rounded-md'
            pageLinkClassName='text-white text-xs py-1 px-2 rounded-md'
            previousClassName='text-white text-xs py-1 px-2 rounded-sm bg-slate-800'
            nextClassName='text-white text-xs py-1 px-2 rounded-sm bg-slate-800'
            disabledClassName='text-white/50'
            disabledLinkClassName='text-slate-600'
            pageCount={totalPage}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
        />
        <div className='bg-slate-800 px-4 py-3 mt-4 rounded-md'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Категория</th>
                        <th>Дата</th>
                        <th className='text-right'>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((trs, idx) => (
                        <tr key={trs.updatedAt}>
                            <td>{idx+1}</td>
                            <td>{trs.title}</td>
                            <td className={trs.type === 'income' ? 'text-green-700': 'text-red-500'}>
                                {trs.type === 'income' ?
                                    `+ ${formatToEuro.format(trs.amount)}`
                                :
                                    `- ${formatToEuro.format(trs.amount)}`
                                }
                            </td>
                            <td>{trs.category?.title || 'Без категории'}</td>
                            <td>{formatDate(trs.createdAt)}</td>
                            <td>
                                <Form method='delete' action='/transactions'>
                                    <input type="hidden" name="id" value={trs.id} />
                                    <input type="hidden" name="type" value={trs.type} />
                                    <button className='btn hover:btn-red ml-auto'><FaTrash /></button>
                                </Form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Table