import React from 'react'
import { Link } from "react-router-dom";
import { navList } from '../../jsonData/navList';

const Footer = () => {
  const img = ['icon_facebook.png', 'icon_twitter.png', 'icon_instagram.png', 'icon_mail.png', 'icon_twitch.png']
  return (
    <footer id="footer" className="flex dark:bg-gray-800 dark:text-white flex-row justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-10/12 py-20 gap-8 lg:justify-items-center">
        <div className="grid gap-2">
          <div>
            <p className="font-bold">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p className="font-bold mt-3 mb-3">patarebenezer_carrental@gmail.com</p>
            <p className="font-bold">081-233-334-808</p>
          </div>
        </div>
        <div className="grid gap-2">
          {navList.map((item) => (
            <Link key={item.id} to={item.href}>{item.name}</Link>
          ))}
        </div>
        <div>
          <p className="font-bold">Connect with us</p>
          <div className="flex gap-2 mt-2">
            {
              img.map((data) => (
                <Link to="#">
                  <img
                    src={require(`../../assets/icons/${data}`)}
                    alt=""
                  />
                </Link>
              ))
            }
          </div>
        </div>
        <div className="">
          <p className="font-bold">Copyright Ebenezer 2022</p>
          <img src={require(`../../assets/icons/car-roof-box.png`)} alt="" className="mt-2 w-1/3 flex" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
