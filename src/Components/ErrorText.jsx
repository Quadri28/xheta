import React from 'react'

const ErrorText = ({children}) => {
  return (
    <div className='text-danger'>
      {children}
    </div>
  )
}

export default ErrorText
