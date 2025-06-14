"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation, Pagination } from "swiper/modules"
import OFFPlanCard from "./OFFPlanCard"
import 'swiper/css/pagination';

const OffPlanCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      navigation
      className="off-slider"
      slidesPerView={1}
      allowTouchMove={false}
      pagination={{ clickable: true }}
      breakpoints={{
        1024: {
          // Desktop and above: dots disabled, arrows enabled, touch disabled
          pagination: false,
        }
      }
      }
    >
      {
        [...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <OFFPlanCard />
          </SwiperSlide>
        ))
      }
    </Swiper >
  )
}

export default OffPlanCarousel
