import React from 'react'
import { List } from "../atoms";
import img_service from "../../assets/img_service.png";
import { serviceList } from '../../jsonData/serviceList';

const OurServices = () => {
  return (
    <div id="our_services" className="bg-white grid grid-cols-1 py-20 dark:bg-gray-800 dark:text-white">
      <div className="flex lg:flex-row py-4 px-4 flex-col justify-evenly items-center">
        <div className="lg:w-1/3 w-3/4">
          <img src={img_service} alt="" />
        </div>
        <div className="lg:w-1/3 w-10/12">
          <h2 className="mt-9 lg:mt-0 text-2xl mb-5 font-bold">
            Best Car Rental for any kind of trip in Medan!
          </h2>
          <p className="text mb-5">
            Sewa mobil di Medan bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
          { serviceList.map((item) => (
            <List key={item.id} name_list={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
