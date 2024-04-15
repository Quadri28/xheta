import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'var(--dark-green)', fontSize:'12px', fontFamily:'Aeonik-reg'}}
    className='p-3'>
    <div className='d-flex flex-wrap gap-2 justify-content-between align-items-center container text-white'>
      <span>© {new Date().getFullYear()} All Rights Reserved</span> <span>A Product of Xheta technologies Ltd.</span>
    </div>
    </div>
  )
}

export default Footer
