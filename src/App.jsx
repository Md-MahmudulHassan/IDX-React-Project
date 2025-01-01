import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import { Navbar } from './Components/navbar/navbar'
import { shop } from './Pages/shop'
import {shop_category} from './Pages/shop_category'
import { product} from './Pages/product'
import { cart} from './Pages/cart'
import { login_signup} from './Pages/login_signup'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<shop />} />
        <Route path='/men' element={<shop_category category = 'men' />} />
        <Route path='/women' element={<shop_category category = 'women' />} />
        <Route path='/kids' element={<shop_category  category = 'kids'/>} />
        <Route path='/product/:id' element={<product />} />
        <Route path='/cart' element={<cart />} />
        <Route path='/login' element={<login_signup />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
