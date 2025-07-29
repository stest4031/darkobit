import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative">
      <div className="w-full h-[400px] sm:h-139">
        <Image
          src="/images/baner.png"
          alt="عکس فروشگاه"
          width={1024}
          height={566}
          className="hidden dark:hidden sm:inline-block w-full h-full"
        />
        <Image
          src="/images/baner-dark.png"
          alt="عکس فروشگاه دارک مود"
          width={1024}
          height={566}
          className="hidden lg:dark:inline-block dark:inline-block w-full h-full"
        />
        <Image
          src="/images/baner-mobile.png"
          alt="بنر موبایل - لایت مود"
          width={1024}
          height={566}
          className="inline-block sm:hidden dark:hidden w-full h-full"
        />

        <Image
          src="/images/baner-dark-mobile.png"
          alt="بنر موبایل - دارک مود"
          width={1024}
          height={566}
          className="hidden sm:hidden dark:inline-block sm:dark:hidden w-full h-full"
        />
        <div className="absolute top-[43px] sm:top-[120px] xl:top-28 w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 dark:gap-0 dark:sm:gap-6 xl:gap-7.25 w-full font-peyda font-bold text-xl ">
            <div className="w-[53px] sm:w-14 xl:w-18.25 h-[53px] sm:h-14 xl:h-19.75 shrink-0">
              <Image
                src="/images/heroLogo.svg"
                alt="عکس آیکون فروشگاه فایل و محصولات دیجیتال"
                width={73}
                height={79}
                className="w-full h-full shrink-0"
              />
            </div>

            <p className="text-xl xs:text-3xl md:text-4xl lg:text-5.5xl font-peyda font-bold text-center text-nowrap">
              فروشگاه فایل و محصولات دیجیتال
            </p>
          </div>
          <p className="mt-2.25 mx-auto xl:mx-[453px] sm:w-[534px] text-center text-sm-mines sm:text-base md:text-lg lg:text-xl font-yekanbakh ">
            خرید و فروش محصولات دانلودی و غیر فیزیکی در کمترین زمان
          </p>
        </div>
        <svg className="dark:hidden absolute size-8 md:size-10 bottom-8 sm:bottom-16 lg:bottom-[76px] left-1/2 -translate-x-1/2">
          <use href="#chevron-down2"></use>
        </svg>
        <svg className="hidden dark:inline-block absolute size-8 md:size-10 bottom-8 sm:bottom-16 lg:bottom-[76px] left-1/2 -translate-x-1/2">
          <use href="#chevron-down2-yellow"></use>
        </svg>
      </div>
      <div className="absolute top-[204px] sm:top-[250px] lg:top-[293px] flex flex-col md:flex-row items-center justify-center lg:justify-normal w-full lg:w-auto lg:mr-[250px] xl:mr-[308px] text-sm sm:text-base">
        <div className="flex w-[250px] xs:w-[354px] sm:w-[400px] lg:w-[500px] xl:w-[625px] h-[54px] lg:h-16 bg-light dark:bg-dark-500 overflow-hidden rounded-20 border border-light-450 dark:border-neutral-500/40">
          <input
            className="w-full h-full pr-[15px] lg:pr-[29px] bg-inherit text-[#919191] outline-none"
            type="text"
            placeholder="به دنبال چه چیزی میگردی  ..."
          />
          <Button className="ml-2.5 my-2 size-[38px] lg:size-[47px] dark:bg-dark dark:hover:bg-dark/60 rounded-15 shrink-0">
            <svg className="size-[13px]">
              <use href="#magnifying"></use>
            </svg>
          </Button>
        </div>
        <div className="mr-1.75 mt-3.25 md:mt-0">
          <Button className="w-[250px] xs:w-[350px] sm:w-[400px] md:w-[80px] lg:w-[100px] xl:w-[191px] h-12 lg:h-[51px] bg-secondary-default hover:bg-secondary-default/90 dark:text-light rounded-9 lg:rounded-2xl">
            فروشگاه
          </Button>
        </div>
      </div>
    </section>
  );
};
