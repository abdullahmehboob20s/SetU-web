import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowLeft from "assets/images/arrow-left.png";
import arrowRight from "assets/images/arrow-right.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ExplainationCard from "./ExplainationCard";

function ExplainationSlider({ setSwiperActiveSlide }) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="px-[3rem] relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          setSwiperActiveSlide(swiper.activeIndex);
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        onSlideChange={(swiper) => {
          setSwiperActiveSlide(swiper.activeIndex);
        }}
      >
        <SwiperSlide>
          <ExplainationCard
            index="01"
            title="What Kind Of Shirt"
            subtitle="CHOOSE THE APPROPRIATE VERSION AND COLOR ACCORDING TO THE MEASURING TAPE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExplainationCard
            index="02"
            title="WHICH IS YOUR FAVORITE MORE"
            subtitle="BOW TIE OR TIE, IN ADDITION YOU CAN CHOOSE THEIR FAVORITE COLOR"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExplainationCard
            index="03"
            title="WHAT WILL I KEEP ON THE PANTS?"
            subtitle="WE WILL CHOOSE THE BELT FOR OUR LOVED ONES THE MOST SUITABLE FOR THEIR LOOK"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExplainationCard
            index="04"
            title="HERE WE ARE SURPRISING"
            subtitle="YOU CAN CHOOSE WHICH MALE COLOR TO CHOOSE BUT IF YOU CHOSE COLORFUL WE WILL SURPRISE YOU  SPECIAL SOCKS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExplainationCard
            index="05"
            title="FINISH IN A BOX"
            subtitle="THE CASE COMES IN A BOX AND CAN BE UPGRADED"
          />
        </SwiperSlide>
      </Swiper>

      <button
        ref={navigationPrevRef}
        className="absolute top-[50%] left-[0] z-[2] cursor-pointer translate-y-[-50%]"
      >
        <img src={arrowLeft} alt="" className="w-[1rem]" />
      </button>
      <button
        ref={navigationNextRef}
        className="absolute top-[50%] right-[0] z-[2] cursor-pointer translate-y-[-50%]"
      >
        <img src={arrowRight} alt="" className="w-[1rem]" />
      </button>
    </div>
  );
}

export default ExplainationSlider;
