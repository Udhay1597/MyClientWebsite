import React, { useState } from 'react'
import { assets } from '../assets/assets'
import './Navbar.css'

const Navbar = () => {

  const[menu,usemenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        <li onClick={()=> usemenu("home")} className={menu==="home"?"active":" "}>home</li>
        <li onClick={()=> usemenu("menu")} className={menu==="menu"?"active":" "}  >menu</li>
        <li onClick={()=> usemenu("mobile-app")}className={menu==="mobile-app"?"active":" "}>mobile app</li>
        <li onClick={()=> usemenu("contact-us")} className={menu==="contact-us"?"active":" "}>contact us</li>
      </ul>
      <div className='navbar-right'>
        {/* <img src={assets.search_icon} alt="" srcset="" /> */}
        {/* <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" srcset="" />
          <div className="dot"></div>
        </div> */}
         <button>sign in</button>  
 
      </div>
    </div>
  )
}

export default Navbar
