import React from 'react'
import { Link } from 'react-router-dom'
const Links = ({name_link, href, cls}) => {
  console.log(cls);
  
  return (
    <Link to={href} className={`flex flex-col px-4 mt-4`}>{name_link}</Link>
  )
}

export default Links