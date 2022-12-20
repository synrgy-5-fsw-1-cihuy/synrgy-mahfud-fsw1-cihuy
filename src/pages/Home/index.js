import React from 'react'
import { useEffect } from 'react';
import {
  Faq,
  Footer,
  Header,
  OurServices,
  WhyUs,
} from "../../components/organism";
import Testimonial from "../Testimonial";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }, [])
  
  return (
    <div className='overflow-hidden'>
      <Header/>
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}
