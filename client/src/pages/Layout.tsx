import { FC } from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header/Header'

const Layout:FC = () => {
  return (
    <div className='min-h-screen bg-slate-900 pb-20 text-white'>
      <Header />
      <div className="m-2 items-center md:container">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout