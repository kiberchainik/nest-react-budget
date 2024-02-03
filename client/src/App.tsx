import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { useAppDispatch } from "./hooks/hook"
import { getTokenFromLS } from "./helpers/localStorage.helper"
import { AuthService } from "./services/auth.services"
import { login, logout } from "./store/user/UserSlice"
import { useEffect } from "react"

function App() {
  const dispatch = useAppDispatch()

  const checkAuth = async() => {
    const token = getTokenFromLS()
    try {
      if(token) {
        const data = await AuthService.getProfile()

        if(data) {
          dispatch(login(data))
        } else {
          dispatch(logout())
        }
      }
    } catch (err) {
      console.log(err);
      
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App