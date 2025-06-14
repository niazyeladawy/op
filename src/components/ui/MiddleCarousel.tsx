"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import PropertyCard from "../PropertyCard"
import { Navigation } from "swiper/modules"

const MiddleCarousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      navigation
      className="props-slider"
      breakpoints={{
        0: {
          slidesPerView: 1.1, // for mobile
        },
        480: {
          slidesPerView: 1.5,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3.3, // default for large screens
        },
      }}
    >
      {[...Array(18)].map((_, index) => (
        <SwiperSlide key={index}>
          <PropertyCard />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MiddleCarousel
