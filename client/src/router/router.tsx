import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";
import Categories from "../pages/Categories";
import Auth from "../pages/Auth";
import ProtectedRoute from "../components/ProtectedRoute";
import Loan from "../pages/Loan";
import { categoriesAction } from "../actions/category.action";
import { categoryLoader } from "../loaders/category.loader";
import { transactionLoader } from "../loaders/transaction.loader";
import { transactionAction } from "../actions/transaction.action";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element:<Home />
            },
            {
                path: 'loan',
                element: <ProtectedRoute><Loan /></ProtectedRoute>
            },
            {
                path: 'transactions',
                loader: transactionLoader,
                action: transactionAction,
                element: <ProtectedRoute><Transactions /></ProtectedRoute>
            },
            {
                path: 'categories',
                action: categoriesAction,
                loader: categoryLoader,
                element: <ProtectedRoute><Categories /></ProtectedRoute>
            },
            {
                path: 'auth',
                element: <Auth />
            }
        ]
    }
])