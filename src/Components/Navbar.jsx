import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <div style={{backgroundColor:'#fff'}} className='py-3'>
    <div className='d-flex justify-content-between align-items-center container'>
      <img src={logo} alt="" />
      <button className='nav-btn btn btn-md'>Get Started</button>
    </div>
    </div>
  )
}

export default Navbar
