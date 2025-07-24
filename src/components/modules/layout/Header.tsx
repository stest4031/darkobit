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
    <header className="container bg-light-200">
      <div className="flex items-center justify-between py-7.5">
        <div className="flex items-center">
          <div className="w-19.5 h-19.5">
            <Image
              src={"/images/darkobit-logo.svg"}
              width={"78"}
              height={"78"}
              className="w-full h-full"
              alt="لوگو"
            />
          </div>

          <div className="mt-3.5 mr-2.5 text-right">
            <div className="w-38.25 h-8.75">
              <Image
                src={"/images/logo.svg"}
                width={"78"}
                height={"78"}
                className="w-full h-full"
                alt="لوگو"
              />
            </div>
            <p className="mt-0.75 mr-1 font-peyda font-bold text-neutral-400">
              مرجع دانلود فایل
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 ">
          <Button className="w-20 h-11 pb-3 bg-light hover:bg-light-200 text-neutral-700 border border-light-400 rounded-default">
            ورود
          </Button>
          <Button className="w-23.25 h-11 pb-3 bg-secondary-default hover:bg-secondary-default/90  rounded-default">
            ثبت نام
          </Button>
        </div>
      </div>
      <nav className="mt-7.5 px-4 py-2.5 bg-light rounded-30">
        <ul className="flex items-center gap-3.75 font-peyda font-medium child:cursor-pointer">
          <li className="flex items-center gap-2.75 py-1.5 pr-3 pl-5 hover:bg-primary-default rounded-13 transition-all duration-150">
            <Button className=" rounded-9 w-8 h-8">
              <svg className="w-5 h-5 text-white shrink-0">
                <use href="#heart"></use>
              </svg>
            </Button>
            <p className="text-dark">پرفروش ترین</p>
            <svg className="w-4 h-4 mt-1 text-dark">
              <use href="#chevron-down"></use>
            </svg>
          </li>
          <li className="flex items-center gap-2.75 py-1.5 pr-3 pl-5 hover:bg-primary-default rounded-13 transition-all duration-150">
            <Button className=" rounded-9 w-8 h-8">
              <svg className="w-5 h-5 text-white shrink-0">
                <use href="#heart"></use>
              </svg>
            </Button>
            <p className="text-dark">پرفروش ترین</p>
            <svg className="w-4 h-4 mt-1 text-dark">
              <use href="#chevron-down"></use>
            </svg>
          </li>
          <li className="flex items-center gap-2.75 py-1.5 pr-3 pl-5 hover:bg-primary-default rounded-13 transition-all duration-150">
            <Button className=" rounded-9 w-8 h-8">
              <svg className="w-5 h-5 text-white shrink-0">
                <use href="#heart"></use>
              </svg>
            </Button>
            <p className="text-dark">پرفروش ترین</p>
            <svg className="w-4 h-4 mt-1 text-dark">
              <use href="#chevron-down"></use>
            </svg>
          </li>
          <li className="flex items-center gap-2.75 py-1.5 pr-3 pl-5 hover:bg-primary-default rounded-13 transition-all duration-150">
            <Button className=" rounded-9 w-8 h-8">
              <svg className="w-5 h-5 text-white shrink-0">
                <use href="#heart"></use>
              </svg>
            </Button>
            <p className="text-dark">پرفروش ترین</p>
            <svg className="w-4 h-4 mt-1 text-dark">
              <use href="#chevron-down"></use>
            </svg>
          </li>
          <li className="flex items-center gap-2.75 py-1.5 pr-3 pl-5 hover:bg-primary-default rounded-13 transition-all duration-150">
            <Button className=" rounded-9 w-8 h-8">
              <svg className="w-5 h-5 text-white shrink-0">
                <use href="#heart"></use>
              </svg>
            </Button>
            <p className="text-dark">پرفروش ترین</p>
            <svg className="w-4 h-4 mt-1 text-dark">
              <use href="#chevron-down"></use>
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
};
