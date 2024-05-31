import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({modalOpen}) => {
  return (
    <div style={{backgroundColor:'#fff'}} className='py-3'>
    <div className='d-flex justify-content-between align-items-center container'>
      <img src={logo} alt="" />
     
      <button className='nav-btn btn btn-md' onClick={()=>modalOpen()}>Get Started</button>

    </div>
    <ToastContainer />
    </div>
  )
}

export default Navbar
