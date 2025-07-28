"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  if (pathName.startsWith("/contact-us") || pathName.startsWith("/about-us")) {
    console.log("header 2");
  } else {
    console.log("header1");
  }
  return (
    <header className=" bg-light  sm:bg-light-200 sm:dark:bg-dark-300">
      <div className="container hidden lg:block">
        <div className=" flex items-center justify-between py-2.5 lg:py-7.5">
          <div className="flex items-center">
            <div className="w-10 lg:w-19.5 h-10 lg:h-19.5">
              <Image
                src={"/images/darkobit-logo.svg"}
                width={"78"}
                height={"78"}
                className="w-full h-full"
                alt="لوگو"
              />
            </div>

            <div className="mt-3.5 mr-1 lg:mr-2.5 text-right">
              <div className="w-24 lg:w-38.25 h-5 lg:h-8.75">
                <Image
                  src={"/images/logo.svg"}
                  width={"78"}
                  height={"78"}
                  className="w-full h-full"
                  alt="لوگو"
                />
              </div>
              <p className="hidden lg:inline-block mt-0.75 mr-1 font-peyda font-bold text-sm lg:text-base text-neutral-400">
                مرجع دانلود فایل
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 ">
            <Button className="w-16 lg:w-20 h-9 lg:h-11 bg-light hover:bg-light-200 text-neutral-700 border border-light-400 rounded-default">
              ورود
            </Button>
            <Button className="hidden sm:inline-block w-16 lg:w-20 h-9 lg:h-11 bg-secondary-default hover:bg-secondary-default/90 dark:text-light rounded-default">
              ثبت نام
            </Button>
          </div>
        </div>
        <nav className="hidden lg:flex items-center justify-between px-4 py-2.5 bg-light dark:bg-dark-500 rounded-30">
          <ul className="flex items-center gap-2 xl:gap-3.75 font-peyda font-medium child:cursor-pointer">
            <li className="header__nav group text-dark">
              <Button className=" rounded-9 w-8 h-8 dark:bg-black">
                <svg className="w-5 h-5 text-white hover:text-dark shrink-0">
                  <use href="#heart"></use>
                </svg>
              </Button>
              <p className="text-dark dark:text-light group-hover:dark:text-dark">
                پرفروش ترین
              </p>
              <svg className="w-4 h-4 mt-1 text-dark dark:text-light group-hover:dark:text-dark">
                <use href="#chevron-down"></use>
              </svg>
            </li>
            <li className="header__nav group">
              <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-150 dark:group-hover:text-dark hover:text-dark shrink-0">
                <use href="#wordpress"></use>
              </svg>
              <p>قالب وردپرس</p>
              <svg className="w-4 h-4 mt-1 ">
                <use href="#chevron-down"></use>
              </svg>
            </li>
            <li className="header__nav group">
              <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-150 dark:group-hover:text-dark hover:text-dark shrink-0">
                <use href="#puzzle-piece"></use>
              </svg>
              <p>افزونه وردپرس</p>
              <svg className="w-4 h-4 mt-1 ">
                <use href="#chevron-down"></use>
              </svg>
            </li>
            <li className="header__nav group">
              <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-150 dark:group-hover:text-dark hover:text-dark shrink-0">
                <use href="#squares-2x2"></use>
              </svg>
              <p>خدمات</p>
              <svg className="w-4 h-4 mt-1 ">
                <use href="#chevron-down"></use>
              </svg>
            </li>
          </ul>
          <div>
            <div className=" flex items-center font-yekanbakh">
              <div className="flex items-center">
                <div>
                  <p className="font-medium text-base text-neutral-800 dark:text-neutral-150">
                    021-45697871
                  </p>
                  <p className=" font-medium text-sm-mines ">
                    <span className="text-primary-700">پشتیبانی</span> 24 ساعته
                  </p>
                </div>
                <svg className="size-5 mr-2 text-neutral-800 dark:text-light">
                  <use href="#phone"></use>
                </svg>
              </div>
              <div className="flex items-center gap-2 mr-3.25">
                <div className="flex items-center gap-0.5 px-2.5 py-2 bg-light-500 dark:bg-dark-300 rounded-20">
                  <p className="flex items-center justify-center size-4 pt-0.5 px-1 bg-light-600/20 text-base text-neutral-500 rounded-full">
                    0
                  </p>
                  <svg className="size-5">
                    <use href="#bookmark"></use>
                  </svg>
                </div>
                <div className="flex items-center gap-4 px-3 xl:px-6 py-2.25 bg-dark-400 dark:bg-dark-300 rounded-20">
                  <p className="flex items-center justify-center size-4 pt-0.5 bg-light/20 text-white rounded-full px-1">
                    0
                  </p>
                  <svg className="size-6">
                    <use href="#shop"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* mobile */}
      <div className="inline-flex items-center justify-between w-full lg:hidden h-[78px] px-[19px] shadow-md">
        <div>
          <Image
            src={"/images/darkobitLogo.svg"}
            alt="عکس لوگو سایت دارکو بیت"
            width={143}
            height={43}
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5 px-2.25 py-1.5 bg-dark-400 rounded-20">
            <p className="flex items-center justify-center size-4 pt-0.5 bg-light/20 text-white rounded-full px-1">
              0
            </p>
            <svg className="size-6">
              <use href="#shop"></use>
            </svg>
          </div>
          <svg className="size-5">
            <use href="#bars"></use>
          </svg>
        </div>
      </div>
    </header>
  );
};
