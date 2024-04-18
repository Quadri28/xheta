import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  return (
    <div style={{backgroundColor:'#fff'}} className='py-3'>
    <div className='d-flex justify-content-between align-items-center container'>
      <img src={logo} alt="" />
      <div
          data-bs-toggle="modal"
          data-bs-target="#waitlist"
        >
      <button className='nav-btn btn btn-md'>Get Started</button>
      </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Navbar
