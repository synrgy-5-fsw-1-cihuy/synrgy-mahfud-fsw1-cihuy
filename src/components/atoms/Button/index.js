import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ name_btn, cls, href}) => {
  return (
    <Link to={href} className={name_btn === 'Edit' ? 'w-full mt-1': ''}>
      <button className={`${cls} text-white px-3 ${name_btn==='Edit' ? 'py-1.5' : 'py-2'} rounded-md font-bold`}>
        {name_btn}
      </button>
    </Link>
  )
}

export default Button