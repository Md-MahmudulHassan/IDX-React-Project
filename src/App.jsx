import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import { Navbar } from './Components/navbar/navbar'
import { Shop } from './Pages/shop'
import {Shop_category} from './Pages/shop_category'
import { Product} from './Pages/product'
import { Cart} from './Pages/cart'
import { Login_signup} from './Pages/login_signup'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<Shop_category category = 'men' />} />
        <Route path='/women' element={<Shop_category category = 'women' />} />
        <Route path='/kids' element={<Shop_category  category = 'kids'/>} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login_signup />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
