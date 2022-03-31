import React from 'react'
import './custom-button.styles.scss'

export default function CustomButton({className, children, ...otherProps}) {
  return (
    <button  className={`custom-button ${className} `}  {...otherProps} >{children}</button>
  )
}
