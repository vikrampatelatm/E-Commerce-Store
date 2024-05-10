import './App.css'
//import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Register from './pages/auth/Register'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/auth/Login'
import PrivateRoute from './components/Routes/Private.jsx'
import ForgetPassword from './pages/auth/ForgetPassword.jsx'
import AdminDashboard from './pages/Admin/AdminDashboard.jsx'
import AdminRoute from './components/Routes/AdminRoute.jsx'
import CreateCategory from './pages/Admin/CreateCategory.jsx'
import CreateProduct from './pages/Admin/CreateProduct.jsx'
import Users from './pages/Admin/Users.jsx'
import Orders from './pages/User/Orders.jsx'
import Profile from './pages/User/Profile.jsx'
import UserDashboard from './pages/User/UserDashboard.jsx'
import Products from './pages/Admin/Products.jsx'
import UpdateProduct from './pages/Admin/UpdateProduct.jsx'
import Search from './pages/Search.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import CategoryProduct from './pages/CategoryProduct.jsx'
import CartPage from './pages/CartPage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path='/search' element={<Search />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/category/:slug' element={<CategoryProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<UserDashboard />} />
          <Route path='user/orders' element={<Orders/>} />
          <Route path='user/profile' element={<Profile/>} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-product' element={<CreateProduct />} />
          <Route path='admin/products' element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path='admin/users' element={<Users />} />
          <Route path='admin' element={<AdminDashboard />} />
          
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  )
}

export default App
