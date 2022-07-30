import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "assets/images/slider-img-1.png";
import sliderImg2 from "assets/images/slider-img-2.png";
import sliderImg3 from "assets/images/slider-img-3.png";
import sliderImg4 from "assets/images/slider-img-4.png";
import arrowLeft from "assets/images/arrow-left.png";
import arrowRight from "assets/images/arrow-right.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Slider() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="px-[3rem] relative">
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="brand-swiper"
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src={sliderImg1} className="w-[80%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={sliderImg4} className="w-[50%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={sliderImg3} className="w-[80%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={sliderImg2} className="w-[60%]" alt="" />
        </SwiperSlide>
      </Swiper>

      <button
        ref={navigationPrevRef}
        className="absolute top-[50%] left-[1.4rem] z-[2] cursor-pointer translate-y-[-50%]"
      >
        <img src={arrowLeft} alt="" className="w-[1rem]" />
      </button>
      <button
        ref={navigationNextRef}
        className="absolute top-[50%] right-[1.4rem] z-[2] cursor-pointer translate-y-[-50%]"
      >
        <img src={arrowRight} alt="" className="w-[1rem]" />
      </button>
    </div>
  );
}

export default Slider;
