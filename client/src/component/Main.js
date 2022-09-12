import React,{useContext} from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

/* react toast */
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

/* component */
import Navbar from './screens/Navbar';                
import Home from './screens/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import UserDashboard from './User/UserDashboard';
import AdminDashboard from './Admin/AdminDashboard';
import Pnf from './util/Pnf';
import { GlobalContext } from './../GlobalContext';
import ProtectedRoute from './middleware/ProtectedRoute';
import Orders from './screens/Orders';
import Profile from './screens/Profile';
import Menu from './screens/Menu';
import ProductDetails from './Product/ProductDetails';
import CreateProduct from './Admin/CreateProduct';
import About from './screens/About';
import Cart from './Product/Cart';
import CheckOut from './Product/CheckOut'
import OrderList from './Admin/OrderList';
import AllUsers from './Admin/AllUsers'
import UpdateProduct from './Admin/UpdateProduct';
import ProfileUpdate from './screens/ProfileUpdate';
import Delivery from './screens/Delivery';


function Main(props) {
  const context = useContext(GlobalContext)

  const [isLogged,setIsLogged] = context.authApi.isLogged;
  const [isAdmin,setIsAdmin] = context.authApi.isAdmin;
  const [isUser,setIsUser] = context.authApi.isUser;


  return (
    <Router>
        <Navbar />
        <ToastContainer autoClose={1000} position='top-center'/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/menu'} element={<Menu/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/login'} element={isLogged ? <Pnf/> : <Login/>}/>
            <Route path={'/register'} element={isLogged ? <Pnf/> : <Register/>}/>


            <Route path={'/user/dashboard'} element={
              <ProtectedRoute auth={isLogged} >
                <UserDashboard />
              </ProtectedRoute>
            }/>

            <Route path={'/product/cart'} element={
              <ProtectedRoute auth={isLogged}>
                <Cart/>
              </ProtectedRoute>
            }/>

            <Route path={'/admin/dashboard'} element={
              <ProtectedRoute auth={isLogged}>
                <AdminDashboard/>
              </ProtectedRoute>
            }/>
             <Route path={'/admin/allOrders'} element={
              <ProtectedRoute auth={isLogged}>
                <OrderList/>
              </ProtectedRoute>
            }/>

             <Route path={'/admin/allUsers'} element={
              <ProtectedRoute auth={isLogged}>
                <AllUsers/>
              </ProtectedRoute>
            }/>

            <Route path={'/profile'} element={
              <ProtectedRoute auth={isLogged}>
                <Profile/>
              </ProtectedRoute>
            }/>
              <Route path={'/profile/update/:id'} element={
              <ProtectedRoute auth={isLogged}>
                <ProfileUpdate/>
              </ProtectedRoute>
            }/>

            <Route path={'/orders'} element={
              <ProtectedRoute auth={isLogged}>
                <Orders/>
              </ProtectedRoute>
            }/>

            <Route path={'/product/details/:id'} element={
              <ProtectedRoute auth={isLogged}>
                <ProductDetails/>
              </ProtectedRoute>
            }/>

            <Route path={'/product/create'} element={
              <ProtectedRoute auth={isLogged}>
                <CreateProduct/>
              </ProtectedRoute>
            }/>

            <Route path={'/product/update/:id'} element={
              <ProtectedRoute auth={isLogged}>
                <UpdateProduct/>
              </ProtectedRoute>
            }/>

            <Route path={'/checkout'} element={
              <ProtectedRoute auth={isLogged}>
                <CheckOut/>
              </ProtectedRoute>
            }/>

            <Route path={'/delivery'} element={
              <ProtectedRoute auth={isLogged} >
                <Delivery />
              </ProtectedRoute>
            }/>


            <Route path={'/*'} element={<Pnf/>}/>
        </Routes>
        

    </Router>
  )
}

export default Main