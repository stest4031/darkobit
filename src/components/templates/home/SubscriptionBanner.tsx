import Image from "next/image";
import { Button } from "../../ui/button";

const SubscriptionBanner = () => {
  return (
    <div className="container flex flex-col md:flex-row-reverse  border border-blue-600">
      <div className="relative w-ful overflow-hidden rounded-xl my-6  border border-red-600">
        {/* ===== Background Image (Conditional) ===== */}
        <Image
          src="/images/sub-banner-bg-desktop.png"
          alt="bg-desktop"
          fill
          className="hidden md:block object-cover z-0"
        />
        <Image
          src="/images/sub-banner-bg-mobile.png"
          alt="bg-mobile"
          fill
          className="block md:hidden object-cover z-0"
        />

        <div>
          <Image
            src="/images/sub-banner-pic.png"
            alt="sbp"
            width={200}
            height={500}
          />

          {/* ===== Title over background (like a banner title) ===== */}
          <div className="relative flex flex-row z-20 px-4 py-10 text-white text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-black/50 inline-block px-6 py-2 rounded-lg">
              200+ محصول متنوع در دسته بندی
            </h1>
          </div>
        </div>
      </div>

      {/* Optional dark overlay */}
      <div className=" inset-0 bg-black/30 z-10   border border-blue-600" />
      {/* ===== Bottom container ===== */}
      <div className="relative z-20 bg-white text-gray-800 px-6 py-10 rounded-b-xl   border border-yellow-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* === Left: title + logo === */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-semibold">
              دانلود و اشتراک محصولات دیجیتال در
            </h2>
            <div className="w-20 h-20 relative   border border-pink-600">
              <Image
                src="/images/logo.svg"
                alt="subscription logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* === Right: lorem + button === */}
          <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right   border border-red-600">
            <p className="text-base md:text-lg max-w-md">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
            <Button className="flex flex-row h-11 pb-3 bg-secondary-default hover:bg-secondary-default/90  rounded-default ">
              مشاهده محصولات
              <svg className="size-6">
                <use href="#btn-left-arrow"></use>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
