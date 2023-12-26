// import Swiper core and required modules
import { Navigation } from 'swiper';
import React, { useEffect } from 'react';

import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import styles from "./Carousel.module.css";

// Import Swiper styles
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';


const Controls = ({ data}) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0)
  }, [data]);
  return <></>
}

function Carousel({data, renderComponent})  {
  return (
    <div className={StyleSheet.wrapper}>

    <Swiper
      style={{ padding: "0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
      <Controls data={data} />
      <CarouselRightNavigation />
      <CarouselLeftNavigation />
      
      {data.map((ele) => (<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
      ...
    </Swiper>
    </div>
  );
};

export default Carousel;