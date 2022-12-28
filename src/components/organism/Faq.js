import React from 'react'
import { Button } from '../atoms'
import Accordion from './Accordion'
import {accordionList} from '../../jsonData/accordionList'

const Faq = () => {
  return (
    <>
      {/* CTA Banner */}
      <div id='faq' className="flex text-white bg-white dark:bg-gray-700  justify-center justify-items-center py-8">
        <div className="rounded-md border flex flex-col justify-center justify-items-center items-center mx-8 py-8 px-8 text-center dark:bg-gray-600 dark:border-none bg-blue-800 w-full lg:w-10/12">
          <p className="text-3xl font-bold mb-8">
            Sewa Mobil di Medan Sekarang
          </p>
          <p className="font-bold lg:w-1/2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Button
            name_btn={"Mulai Sewa Mobil"}
            cls={"bg-green-500 hover:bg-green-600 dark:bg-gray-800 dark:hover:bg-gray-900"}
            href={'/search'}
          />
        </div>
      </div>
      {/* CTA Banner */}

      {/* FAQ */}
      <div className="flex justify-between bg-white text-black py-28 dark:bg-gray-700 dark:text-white">
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 lg:w-11/12 px-5 justify-center justify-items-center">
          <div>
            <p className="text-3xl font-bold">Frequently Asked Question</p>
            <p className="font-bold mt-3">
            Pertanyaan yang sering diajukan
            </p>
          </div>
          
          <div className="w-full grid pt-8 lg:pt-0">
            {
              accordionList.map((item) => (
                <Accordion header={item.title} detail={item.detail} />
              ))
            }
          </div>
        </div>
      </div>
      {/* FAQ */}
    </>
  )
}

export default Faq