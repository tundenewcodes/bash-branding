import React from 'react'

const HeaderText = ({text, className}) => {
  return (
   <p className={` ${className} header-text `}>{text}</p>
  )
}

export default HeaderText