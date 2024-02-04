import { ChangeEvent, FC, useState } from 'react'
import LoginForm from '../components/Auth/LoginForm/LoginForm'
import RegisterForm from '../components/Auth/RegisterForm/RegisterForm'

type TLoginData = {
  email: string
  password: string
}

type TRegisterData = {
  email: string
  login:string
  password: string
}

const Auth:FC = () => {
  const [_isAuth, setIsAuth] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(true)
  const [loginData, setLoginData] = useState<TLoginData>({
    email: '', password: ''
  })
  const [registerData, setRegisterData] = useState<TRegisterData>({
    email: '', login: '', password: ''
  })

  const handleChangeLoginData = (e:ChangeEvent<HTMLInputElement>) => {
    setLoginData(formData => ({...formData, [e.target.name]: e.target.value}))
  }

  const handleChangeRegisterData = (e:ChangeEvent<HTMLInputElement>) => {
    setRegisterData(formData => ({...formData, [e.target.name]: e.target.value}))
  }

  return (
    <div className='mt-40 flex flex-col items-center justify-center bg-slate-900 text-white'>
      {isRegister ? (
        <LoginForm 
          {...loginData}
          isAuth
          setIsAuth={setIsAuth}
          handleChangeLoginData={handleChangeLoginData} 
          setIsRegister={setIsRegister} 
          isRegister={isRegister}
        />
      ) : (
        <RegisterForm 
          {...registerData}
          isAuth
          isRegister={isRegister}
          setIsAuth={setIsAuth}
          handleChangeRegisterData={handleChangeRegisterData} 
          setIsRegister={setIsRegister} 
        />
      )}
    </div>
  )
}

export default Auth