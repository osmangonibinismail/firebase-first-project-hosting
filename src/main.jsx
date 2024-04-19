import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Card from './components/Card/Card.jsx';
import Routes from './Routes/Routes.jsx';
import Update from './components/Update/Update.jsx';
import UpdateRoutes from './Routes/UpdateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/card.json')
      },
      {
        path: '/card/:id',
        element: <Routes><Card></Card></Routes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update',
        element: <UpdateRoutes><Update></Update></UpdateRoutes>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
