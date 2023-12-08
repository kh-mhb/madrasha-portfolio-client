import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import {Autoplay, Navigation , Pagination } from 'swiper/modules';
import img1 from '../../../../assets/banner//img1.jpeg'

const Banner = () => {
  return (
    <>
      <Swiper
        dir="rtl"
        // navigation={true}
        
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        modules={[Autoplay , Navigation , Pagination]}
         className="mySwiper"
      >
        <SwiperSlide>
            <div className="swiper-slide-transform">
                <div className="text-overlay">
                    <h1  className='text-banner'>Data for test</h1>
                    <h1  className='text-b'>Lutfia atimkhana</h1>
                </div>
                <img src={img1} alt="" />
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="swiper-slide-transform">
                <div className="text-overlay">
                    <h1  className='text-banner'>Data for test</h1>
                    <h1  className='text-b'>Lutfia atimkhana</h1>
                </div>
                <img src={img1} alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="swiper-slide-transform">
                <div className="text-overlay">
                    <h1  className='text-banner'>Data for test</h1>
                    <h1  className='text-b'>Lutfia atimkhana</h1>
                </div>
                <img src={img1} alt="" />
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Banner