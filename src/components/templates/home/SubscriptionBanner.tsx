import Image from "next/image";
import { Button } from "../../ui/button";

const SubscriptionBanner = () => {
  return (
    <div className="w-full bg-white py-10 md:px-16">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        <div className="flex flex-col items-center md:items-start text-center md:text-right gap-1 md:flex-1">
          <h2 className="mt-5 text-2xl md:text-2xl font-medium">
            دانلود و اشتراک محصولات دیجیتال در
          </h2>

          <div className="mt-0 w-80 h-14 relative">
            <Image
              src="/images/logo.svg"
              alt="لوگو دارک بیت"
              fill
              className=" object-contain"
            />
          </div>

          <p className="text-gray-600 text-base mt-4 max-sm:px-4 md:text-lg max-w-md">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>

          <Button className="bg-secondary-default hover:bg-secondary-default/90 rounded-2xl mt-7 px-6 h-11 flex gap-2 items-center">
            مشاهده محصولات
            <svg className="!size-6 shrink-0">
              <use href="#arrow-left"></use>
            </svg>
          </Button>
        </div>

        <div className="relative w-full md:w-[320px]">
          <div className="relative w-full h-[420px] md:h-96 overflow-hidden">
            <Image
              src="/images/Group 1437254053.png"
              alt="بکگراند"
              width={600}
              height={400}
              className="absolute object-cover scale-[170%] top-[150px] -left-[35%] z-0"
            />
          </div>

          <div className="relative px-4 py-4 rounded-3xl text-center overflow-hidden w-fit mx-auto">
            <Image
              src="/images/sub-banner-title-bg.png"
              alt="label background"
              fill
              className="scale-x-[110%] object-cover z-0"
            />

            <div className="relative z-10 text-sm md:text-base font-medium text-gray-800">
              <span className="font-bold text-3xl text-black"> ۲۰۰+ </span> محصول متنوع در دسته بندی
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
