import React from 'react'

const Label = ({text , labelFor , className}) => {
  return (
    <label htmlFor={labelFor} className={className}>{text}</label>
  )
}

export default Label