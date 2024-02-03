import { FC, FormEvent } from 'react'
import { AuthService } from '../../../services/auth.services'
import { toast } from 'react-toastify'
import axios from 'axios'
import { TFormRegisterDataProps } from '../../../types/types'
import styles from './register.module.scss'

const RegisterForm:FC<TFormRegisterDataProps> = ({email, login, password, isAuth, setIsAuth, handleChangeRegisterData, setIsRegister, isRegister}) => {
  const registrationHandler = async (e:FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const data = await AuthService.registration({email, login, password})

      if(data) {
        toast.success('Аккаунт успешно создан!')
        setIsAuth(!isAuth)
        setIsRegister(!isRegister)
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
        <h3 className={styles.titleForm}>Регистрация</h3>
        <form onSubmit={registrationHandler} className={styles.authform}>
          <input type="text" name='email' onChange={handleChangeRegisterData} value={email} className='input' placeholder='Email' />
          <input type="text" name='login' onChange={handleChangeRegisterData} value={login} className='input' placeholder='Login' />
          <input type="password" name='password' onChange={handleChangeRegisterData} value={password} className='input' placeholder='Password' />

          <button className='btn btn-green mx-auto'>Регистрация</button>
        </form>
        <div className="mt-5 flex justify-center">
          <button onClick={() => setIsRegister(!isRegister)} className='text-slate-300 hover:text-white'>Войти в существующий аккаунт</button>
        </div>
    </div>
  )
}

export default RegisterForm