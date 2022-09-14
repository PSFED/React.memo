import React from 'react'
import style from './Button.module.css'

const Button = ({ onClick, children }) => {
  console.log('Button')
  return (
    <button onClick={onClick} className={`${style.button}`}>
      {children}
    </button>
  )
}

export default React.memo(Button)
