import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='bottom-left' autoClose={3000} />
  </Provider>
)