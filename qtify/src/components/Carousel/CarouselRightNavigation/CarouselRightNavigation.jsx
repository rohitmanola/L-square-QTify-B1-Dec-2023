import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import {ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
    const swiper = useSwiper(); 
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.onAny("slideChange", function() {
            setIsEnd(swiper.isEnd);
        })
    }, []);
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext} />}
        </div>
    )
}