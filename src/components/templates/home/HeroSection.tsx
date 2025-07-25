import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative">
      <div className="w-full h-139">
        <Image
          src="/images/baner.png"
          alt="عکس فروشگاه فایل و محصولات دیجیتال"
          width={1024}
          height={566}
          className="w-full h-full"
        />
        <div className="absolute top-28 w-full">
          <div className="flex items-center gap-7.25 mr-[313px] ml-[322px] font-peyda font-bold text-xl ">
            <div className="w-18.25 h-19.75 shrink-0">
              <Image
                src="/images/heroLogo.svg"
                alt="عکس آیکون فروشگاه فایل و محصولات دیجیتال"
                width={73}
                height={79}
                className="w-full h-full shrink-0"
              />
            </div>

            <p className="text-5.5xl text-center text-nowrap">
              فروشگاه فایل و محصولات دیجیتال
            </p>
          </div>
          <p className="mt-2.25- text-center text-xl font-yekanbakh mx-[453px] w-[534px]">
            خرید و فروش محصولات دانلودی و غیر فیزیکی در کمترین زمان
          </p>
        </div>
        <svg className="absolute size-5 bottom-[76px] left-1/2 -translate-x-1/2">
          <use href="#chevron-down2"></use>
        </svg>
      </div>
    </section>
  );
};
