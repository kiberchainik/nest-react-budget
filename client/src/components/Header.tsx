import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth'
import { useAppDispatch } from '../hooks/hook'
import { logout } from '../store/user/UserSlice'
import { removeTokenFromLS } from '../helpers/localStorage.helper'

const Header:FC = () => {
  const isAuth = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLS('token')
    navigate('/')
  }
  return (
    <header className='sticky z-10 flex items-center justify-between bg-gradient-to-tl from-slate-700 to-slate-800 p-4 shadow-md backdrop-blur-sm'>
        <Link to='/'>
            <FaBtc size={20} />
        </Link>
        {
            isAuth && (
                <nav className='ml-auto mr-10'>
                    <ul className="flex items-center gap-5">
                        <li><NavLink to={'/'}>Главная</NavLink></li>
                        <li><NavLink to={'/loan'}>Займы</NavLink></li>
                        <li><NavLink to={'/transactions'}>Прибыль/Траты</NavLink></li>
                        <li><NavLink to={'/categories'}>Категории</NavLink></li>
                    </ul>
                </nav>
            )
        }
        {
            isAuth ? (
                <button onClick={logoutHandler} className='btn btn-red'>
                    <span>Выйти</span> <FaSignOutAlt />
                </button>
            ) : (
                <Link to={'auth'} className='py-2 text-white/50 hover:text-white ml-auto'>Вход/Регистрация</Link>
            )
        }
    </header>
  )
}

export default Header