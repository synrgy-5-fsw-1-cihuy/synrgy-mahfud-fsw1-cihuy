import React from 'react'
import { Item } from '../atoms'
import { whyusList } from '../../jsonData/whyusList'

const WhyUs = () => {
  return (
    <div id='whyus' className="bg-white pb-14 dark:bg-gray-800 dark:text-white flex flex-col justify-center  justify-items-center items-center">
      <div className="flex flex-col items-start justify-between w-10/12 mb-10 mt-4">
        <h1 className="text-3xl font-bold mb-4">Why Us?</h1>
        <p className="text-1xl font-bold">
          Mengapa harus pilih Binar Car Rental?
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 flex flex-col lg:flex-row justify-center gap-4 mb-8 w-10/12">
        {whyusList.map((item, index) => (
          <Item
            key={index}
            name_item={item.name_item}
            detail={item.detail}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default WhyUs