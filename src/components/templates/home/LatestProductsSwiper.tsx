"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./../../../styles/swiperStyles.css";

import { Pagination } from "swiper/modules";
import ShopCard from "@/components/modules/ShopCard";
import SwiperCore from "swiper";

export default function LatestProductsSwiper() {
  const swiperRef = useRef<SwiperCore>();

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={33}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Pagination]}
        className="mySwiper bg-light-200/50 dark:bg-dark-200 rounded"
      >
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-start justify-start px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
          <ShopCard />
        </SwiperSlide>
      </Swiper>
      <div className="mt-9 mr-[27px]">
        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={handlePrev}>
            <span className="relative inline-block size-7 bg-[#ECEDF4] hover:bg-[#ECEDF4]/70 dark:bg-dark-500 hover:dark:bg-dark-500/70 rounded-full">
              <svg className="absolute -top-0.75 -right-3 size-9 text-dark-200 dark:text-light rotate-180">
                <use href="#arrow-left"></use>
              </svg>
            </span>
          </div>
          <div className="cursor-pointer" onClick={handleNext}>
            <span className="relative inline-block size-7 bg-[#ECEDF4] hover:bg-[#ECEDF4]/70 dark:bg-dark-500 hover:dark:bg-dark-500/70 rounded-full">
              <svg className="absolute -top-0.75 right-1 size-9 text-dark-200 dark:text-light">
                <use href="#arrow-left"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
