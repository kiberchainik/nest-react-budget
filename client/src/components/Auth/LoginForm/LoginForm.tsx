import { FC, FormEvent } from 'react'
import { AuthService } from '../../../services/auth.services'
import { toast } from 'react-toastify'
import { setTokenToLS } from '../../../helpers/localStorage.helper'
import { useAppDispatch } from '../../../hooks/hook'
import { login } from '../../../store/user/UserSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TFormLoginDataProps } from '../../../types/types'
import styles from './login.module.scss'

const LoginForm:FC<TFormLoginDataProps> = ({email, password, handleChangeLoginData, setIsRegister, isRegister}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loginHandler = async (e:FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const data = await AuthService.login(email, password)

      if(data) {
        setTokenToLS('token', data.access_token)
        dispatch(login(data))
        navigate('/')
      }
    } catch (err:any) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message)
      } else {
          console.log('Unexpected error', err);
      }
    }
  }

  return (
    <div>
        <h3 className={styles.titleForm}>Вход</h3>
        <form onSubmit={loginHandler} className={styles.authForm}>
          <input type="text" name='email' onChange={handleChangeLoginData} value={email} className='input' placeholder='Email' />
          <input type="password" name='password' onChange={handleChangeLoginData} value={password} className='input' placeholder='Password' />
          <button className='btn btn-green mx-auto'>Войти</button>
        </form>
        <div className="mt-5 flex justify-center">
            <button onClick={() => setIsRegister(!isRegister)} className='text-slate-300 hover:text-white'>Новая регистрация</button>
        </div>
    </div>
  )
}

export default LoginForm