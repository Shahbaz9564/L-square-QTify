//import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import styles from "./Carousel.module.css";

// import required modules
import { Navigation } from 'swiper/modules';

const Control =({data}) =>{
  const swiper = useSwiper();

  
}

export default function Carousel({data, renderComponent}) {


  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={7} spaceBetween={40} >
        <Control data ={data} />
        <div>
          <LeftNavigation />
          <RightNavigation />
        </div>
        {data.map((ele)=>(
<SwiperSlide>
  
  {renderComponent(ele)}</SwiperSlide>
        )
    )
}
      </Swiper>
    </div>
  );
}
