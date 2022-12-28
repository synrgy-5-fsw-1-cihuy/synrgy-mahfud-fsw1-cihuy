import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataTestimonial } from '../../jsonData/testimonialList';
import './style.css'
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const slider = useRef()
  const next = () => {
    slider.current.slickNext();
  };
  const prev = () => {
    slider.current.slickPrev();
  }; 
  const settings = {
    className:'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding:'29%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "2%"
        }
      }
    ],
    
  };
  return (
    <div className='w-full lg:text-left text-center dark:bg-gray-700 py-14 dark:text-white' id='testi'>
      <div className=''>
        <div className='mt-6 font-bold text-center'>
          <h2 className='text-3xl'>Testimonial</h2>
          <p className='mt-2 mb-6'>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <Slider ref={slider}  {...settings}>
          {dataTestimonial.map((item) => (
            <div className='flex justify-center items-center'>
              <div key={item.id} className='ml-5 w-11/12 py-10 flex flex-col lg:flex-row items-center gap-4 bg-blue-50 dark:bg-gray-800 hover:bg-blue-100 rounded-lg m-5 p-5'>
                <div className='lg:w-full'>
                  <img src={require(`../../assets/${item.profile}`)} alt="" />
                </div>
                <div>
                  <div className="rating flex mb-3 justify-center lg:justify-start">
                    {Array.from(Array(5), (i) => (
                      <img key={i} src={require(`../../assets/icons/${item.rating}`)} alt="" />
                    ))}
                  </div>
                  <p className='text-gray-800 dark:text-white font-bold'>{item.title}</p>
                  <p className='mt-3 text-gray-500 dark:text-gray-400'>{item.address}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-3 gap-5">
            <button className="border border-gray-400 rounded-full slider-button" onClick={prev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="border border-gray-400 rounded-full slider-button" onClick={next}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial