import Link from "next/link";
import React from "react";
import LatestProductsSwiper from "./LatestProductsSwiper";

export const LatestProducts = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-between mb-8 dark:text-light">
        <h2 className="font-peyda text-base-mines sm:text-lg lg:text-2xl font-bold shrink-0">
          جدیدترین محصولات
        </h2>
        <span className="w-full h-px bg-[#EBEBEB] dark:g-[#6F6F6F] mx-2.5 sm:mx-4 lg:mx-11"></span>
        <Link
          href="/"
          className="flex items-center gap-1.5 shrink-0 px-1.5 lg:px-4 py-1 lg:py-2 bg-neutral-300 dark:bg-[#3C3C3C] font-medium text-light rounded-20"
        >
          <p className="text-sm">مشاهده بیشتر</p>
          <svg className="size-4 lg:size-5">
            <use href="#arrow-left"></use>
          </svg>
        </Link>
      </div>
      <div>
        <LatestProductsSwiper />
      </div>
    </section>
  );
};
