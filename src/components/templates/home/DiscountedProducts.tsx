import React from "react";
import { DiscountedProductsSlider } from "./DiscountedProductsSlider";
import { DiscountTimerBox } from "./DiscountTimerBox";

export const DiscountedProducts = () => {
  return (
    <section className="container">
      <div className="flex items-center flex-col md:flex-row gap-2 px-2 md:mx-0 bg-discountBG-mobile md:bg-discountBG-desktop bg-contain bg-no-repeat bg-center pt-[68px] lg:pt-[107px] pb-16 min-h-[300px]">
        <DiscountTimerBox />
        <DiscountedProductsSlider />
      </div>
    </section>
  );
};
