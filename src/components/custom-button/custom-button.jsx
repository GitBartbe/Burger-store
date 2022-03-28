import React from 'react'
import './custom-button.styles.scss'

export default function CustomButton({className, children}) {
  return (
    <button  className={`custom-button ${className} `} >{children}</button>
  )
}
