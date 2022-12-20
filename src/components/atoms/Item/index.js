import React from 'react'
const Item = ({icon, name_item, detail}) => {
  return (
    <div className='lg:mx-0 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 lg:my-1 my-1 w-full lg:w-1/2 rounded-lg leading-normal border p-5 hover:bg-slate-100'>
      <img src={require(`../../../assets/icons/${icon}.png`)} alt="icon" />
      <p className='text-1xl font-bold mb-3 mt-3'>{name_item}</p>
      <p>{detail}</p>
    </div>
  )
}

export default Item