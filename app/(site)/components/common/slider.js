"use client"
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Navigation, Pagination } from 'swiper/modules';



const Slider = ({ children, SliderView = [] }) => {
    return (
        <div className="relative">
            
            <div className=''>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    freeMode={true}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: SliderView[0] || 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: SliderView[1] || 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: SliderView[2] || 3,
                            spaceBetween: 24,
                        },
                    }}
                    modules={[FreeMode, Pagination, Navigation]}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    className="mySwiper"
                >
                    {children}
                </Swiper>
            </div>
            
        </div>



    );
};

export default Slider;