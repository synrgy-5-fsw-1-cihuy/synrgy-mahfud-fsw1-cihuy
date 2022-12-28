import React from 'react'
import { Button } from "../atoms";
import mobil from "../../assets/img_car.png";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation()
  const params = location.pathname
  return (
    <>
      <div className="flex dark:bg-gray-700 dark:text-white flex-col lg:grid lg:grid-cols-2 lg:w-full items-center lg:gap-4 lg:pl-32">
        <div className="lg:w-full px-7 mt-[-20px] lg:mt-[-60px]">
          <h2 className="text-4xl font-bold mb-8 mt-14 lg:mt-0">
            Sewa & Rental Mobil Terbaik di Kawasan Medan
          </h2>
          <p className="mb-8">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24jam.
          </p>
          {params === '/search' ? '' :
            <Button
              name_btn={"Mulai Sewa Mobil"}
              cls={"bg-green-500 focus:outline-none hover:bg-green-600 dark:bg-gray-900 dark:hover:bg-gray-800"}
              href={'/search'}
            />}

        </div>
        <div className="ml-4 mt-16">
          <img src={mobil} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
