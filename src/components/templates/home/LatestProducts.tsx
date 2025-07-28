"use client";

import React from "react";

export const LatestProducts = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-between mb-8">
        <p className="font-peyda font-bold shrink-0">جدیدترین محصولات</p>
        <span className="w-full h-px bg-[#EBEBEB] mx-11"></span>
        <div className="flex items-center gap-1.5 shrink-0 px-4 py-2 bg-neutral-300 font-medium text-light rounded-20">
          <p className="text-sm">مشاهده بیشتر</p>
          <svg className="size-5">
            <use href="#arrow-left"></use>
          </svg>
        </div>
      </div>
    </section>
  );
};
