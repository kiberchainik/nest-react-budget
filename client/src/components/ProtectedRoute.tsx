import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import { GoPasskeyFill } from "react-icons/go"
import { Link } from 'react-router-dom'

interface Props {
    children: JSX.Element
}

const ProtectedRoute:FC<Props> = ({children}) => {
  const isAuth = useAuth()
  return (
    <div>
        {isAuth ? 
            children
        :
            <div className='mt-20 flex flex-col items-center justify-center gap-10'>
                <div className='text-2xl'>
                    <Link to='/auth' className='underline'>Заегистрируйтесь</Link> или <Link to='/auth' className='underline'>войдите</Link> в свой аккаунт!
                </div>
                <GoPasskeyFill className='h-60 w-60' />
            </div>
        }
    </div>
  )
}

export default ProtectedRoute