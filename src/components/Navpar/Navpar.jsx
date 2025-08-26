import React, { useState } from 'react'
import './Navpar.css'

import { Link } from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';


const Navpar=({setShowLogin})=> {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navpar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>

      <ul className='navbar-menu'>
        <Link to="/" className={menu==="home" ? "active" : ""} onClick={() => setMenu("home")}>home</Link>
          <a href='#explore-menu' className={menu==="menu" ? "active" : ""} onClick={() => setMenu("menu")}>menu</a>
          <a href='#app-download' className={menu==="mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>mobile-app</a>
          <a href='#footer' className={menu==="contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>contact us</a>
      </ul>

      <div className='navpar-right'>
        <img src={assets.search_icon} alt="search" />
        <div className='navpar-search-icon'>
          <Link to="/cart"><img src={assets.basket_icon} alt="basket" /></Link>
          <div className={getTotalCartAmount()===0?  "": "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navpar
