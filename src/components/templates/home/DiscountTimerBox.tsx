import React from "react";

export const DiscountTimerBox = () => {
  return (
    <div className="relative bg-secondary-default w-[288px] h-[230px] md:h-[280px] lg:h-[378px] rounded-tl-48 rounded-bl-48 rounded-tr-3xl rounded-br-3xl">
      <p className="mt-[20px] lg:mt-[69px] mx-[59px] font-peyda font-extrabold text-base lg:text-3xl text-light text-center leading-10 ">
        محصــــولات تخـــفیف دار
      </p>
      <div className="relative flex items-center gap-1 pt-2 lg:pt-4 px-[25px] pb-5 lg:pb-9 mx-[31px] mt-2.5 bg-light text-center rounded-3xl child:font-peyda child:font-semibold child:text-[#393939] overflow-hidden">
        <div className="mt-2 lg:mt-4">
          <span className="inline-flex items-center justify-center pt-1 size-12 bg-[#226CFF]-10 text-3xl rounded-18 border border-secondary-default">
            25
          </span>
          <p className="h-3.5 font-yekanbakh font-light text-xs-mines text-[#081035]">
            ثانیه
          </p>
        </div>
        <span className="font-peyda font-bold text-3xl">:</span>
        <div className="mt-2 lg:mt-4">
          <span className="inline-flex items-center justify-center pt-1 size-12 bg-[#226CFF]-10 text-3xl rounded-18 border border-secondary-default">
            15
          </span>
          <p className="h-3.5 font-yekanbakh font-light text-xs-mines text-[#081035]">
            دقیقه
          </p>
        </div>
        <span className="font-peyda font-bold text-3xl">:</span>
        <div className="mt-2 lg:mt-4">
          <span className="inline-flex items-center justify-center pt-1 size-12 bg-[#226CFF]-10 text-3xl rounded-18 border border-secondary-default">
            08
          </span>
          <p className="h-3.5 font-yekanbakh font-light text-xs-mines text-[#081035]">
            ساعت
          </p>
        </div>
        <div className="absolute -bottom-[32px] left-1/2 -translate-x-1/2 bg-[#393939] w-[140px] h-10 rounded-lg"></div>
      </div>
      <div className="flex-center mt-[15px] lg:mt-[31px] w-full">
        <div className="flex items-center gap-2">
          <div className="cursor-pointer">
            <span className="relative inline-block size-7 bg-light/10 hover:bg-light-30 dark:bg-dark-500 hover:dark:bg-dark-500/70 rounded-full">
              <svg className="absolute -top-0.75 -right-3 size-9 text-light dark:text-light rotate-180">
                <use href="#arrow-left"></use>
              </svg>
            </span>
          </div>
          <div className="cursor-pointer">
            <span className="relative inline-block size-7 bg-light/10 hover:bg-light-30 dark:bg-dark-500 hover:dark:bg-dark-500/70 rounded-full">
              <svg className="absolute -top-0.75 right-1 size-9 text-light dark:text-light">
                <use href="#arrow-left"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <svg className="absolute top-0 -right-20 w-[253px] h-[229px] rotate-6">
        <use href="#pattern"></use>
      </svg>
    </div>
  );
};
