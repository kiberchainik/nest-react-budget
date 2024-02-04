import { FC, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../../hooks/useAuth'
import { useAppDispatch } from '../../hooks/hook'
import { logout } from '../../store/user/UserSlice'
import { removeTokenFromLS } from '../../helpers/localStorage.helper'
import { IoIosMenu } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
import styles from './header.module.scss'

const Header:FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const isAuth = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLS('token')
    navigate('/')
  }
  return (
    <header className={styles.header}>
        <Link to='/'>
            <FaBtc size={20} />
        </Link>
        {
            isAuth && (
                <>
                <div className='hidden max-lg:block max-lg:ml-auto max-lg:text-3xl max-lg:cursor-pointer'>
                    {menuOpen ? <IoCloseOutline onClick={() => setMenuOpen(!menuOpen)} /> : <IoIosMenu onClick={() => setMenuOpen(!menuOpen)} />}
                </div>
                <nav className={styles.nav} style={menuOpen?{top: 65}:{top: -300}}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><NavLink to={'/'}>Главная</NavLink></li>
                        <li className={styles.li}><NavLink to={'/loan'}>Займы</NavLink></li>
                        <li className={styles.li}><NavLink to={'/transactions'}>Прибыль/Траты</NavLink></li>
                        <li className={styles.li}><NavLink to={'/categories'}>Категории</NavLink></li>
                    </ul>
                </nav>
                </>
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