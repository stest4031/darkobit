import React from "react";
import Image from "next/image";

export default function ShopCard() {
  return (
    <>
      <div className="mt-[39px]">
        <Image
          src="/images/notebook.png"
          width={146}
          height={146}
          alt="عکس محصول"
        />
      </div>
      <p className="w-full my-2.5 text-right text-[#081035] dark:text-[#EEEEEE] text-base font-peyda font-bold">
        فروش فایل دیجیتال
      </p>
      <div className="flex items-start justify-start gap-1 w-full font-bold text-primary-700">
        <p className="leading-none">4.2</p>
        <svg className="size-4">
          <use href="#star"></use>
        </svg>
      </div>
      <div className="flex items-center justify-between mt-4 mb-[31px] w-full child:font-peyda child:text-[#081035]">
        <div className="flex-center p-2 lg:p-[13px] bg-light-200 dark:bg-dark-200 hover:bg-light-300 hover:dark:bg-dark-300 duration-150 cursor-pointer rounded-9 lg:rounded-full">
          <svg className="size-[26px] text-[#081035] dark:text-[#EEEEEE]">
            <use href="#shop"></use>
          </svg>
        </div>
        <div className="dark:text-[#EEEEEE]">
          <p className="font-bold text-lg">
            25,000,00 <span className="font-light">تومان</span>
          </p>
        </div>
      </div>
    </>
  );
}
