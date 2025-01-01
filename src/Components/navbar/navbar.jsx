import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shoper</p>
      </div>
      <div className="nav-menu">
        
          <li onClick={() => {setMenu("shop")}}><Link to={"/"}>Shop</Link> {menu ==="shop"? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("men")}}><Link to={"/men"}>Men</Link> {menu ==="men" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("women")}}><Link to={"/women"}>Women</Link>{menu ==="women" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("kids")}}><Link to={"/kids"}>Kids</Link>{menu ==="kids" ? <hr /> : <></>}</li>
        
      </div>
      <div className="nav-login">
        <Link to={"/login"}><button>Login</button></Link>
        <Link to={"/cart"}><img src={cart} alt="cart" /></Link>
        <div className="nav-cart-count">
          0
        </div>
      </div>
    </div>
  )
}
