import { type } from '@testing-library/user-event/dist/cjs/utility/type.js'
import React, { Children } from 'react'

function Button({
    Children,
    type = "button",
    bgColor="blue",
    textColor="white",
    className = "",
    ...props
}) {
  return (
    <button 
    className= {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}
        type={type}>{Children}</button>
    )
}

export default Button