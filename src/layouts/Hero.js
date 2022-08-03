import React, { useEffect } from "react";
import heroBg from "assets/images/hero-bg.png";
import set4you from "assets/images/set4you.png";
import set4U from "assets/images/set4U.png";
import { IoMdArrowRoundDown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import gift from "assets/images/gift.png";
import dontknow from "assets/images/dontknow.png";
import { Link as ScrollLink } from "react-scroll";
import Slider from "./Slider";

function Hero() {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();

    return () => {
      window.removeEventListener("resize", null);
    };
  });

  return (
    <div className="flex flex-col h-[var(--app-height)]">
      {/* ;lasd;laskd;l */}
      <div className="relative flex flex-1 flex-col md:flex-row md:items-center md:px-[4vw] md:space-x-[2vw]">
        <img
          src={heroBg}
          className="absolute top-0 left-0 w-full h-[100%] z-[-10] md:h-[96%] md:w-[96%] md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:rounded-[1.4vw] lg:h-[96%] lg:w-[98%]"
          alt=""
        />
        <div className="mt-5 flex justify-center md:absolute md:top-[4%] md:left-[50%] md:translate-x-[-50%] md:mt-0 lg:top-[6%] ">
          <img src={set4U} alt="" className="w-[5rem] md:w-[10vw]" />
        </div>
        <div className="relative h-[auto] flex-1 py-[2rem] px-[1.7rem] pb-0 md:px-0 md:py-0 lg:max-w-[46%]">
          <img
            src={set4you}
            className="w-full max-w-[22rem] mx-auto sm:max-w-[20rem] sm:mx-auto md:max-w-[auto] md:min-w-full "
            alt=""
          />

          <h1 className="font-lunchBox text-[2.4rem] text-white font-[700] text-center pink-border-text mt-[-2rem] md:text-[5.4vw] lg:text-[4vw] lg:mt-[-4vw]">
            SEND LOVE IN A PACKAGE!
          </h1>

          <p className="text-center text-[1.3rem] text-white leading-[1.2] max-w-[26rem] mx-auto md:max-w-none md:text-[2.8vw] lg:text-[2vw] lg:max-w-[35vw]">
            FOR THE FIRST TIME IN ISRAEL A PILOT DEDICATED ENTIRELY TO THE SMALL
            EXPERIENCES AND THRILLS IN LIFE
          </p>

          <div className="flex items-center space-x-4 justify-center mt-7 cursor-pointer md:space-x-[2vw] md:mt-[4vw] lg:mt-[2.6vw]">
            <ScrollLink
              to="explaination"
              offset={-200}
              className="px-4 py-2 rounded-[.6rem] text-black border-white border-2 text-[1.1rem] leading-[1] bg-yellow font-bold flex items-center space-x-1 md:text-[3vw] md:px-[2vw] md:py-[1vw] lg:text-[1.8vw] lg:px-[1.6vw] lg:py-[.7vw] lg:space-x-[1vw] lg:border-[.22vw] lg:rounded-[.6vw]"
            >
              <span>EXPLANATION</span>
              <IoMdArrowRoundDown />
            </ScrollLink>
            <ScrollLink
              to="buy"
              className="px-4 py-2 rounded-[.6rem] text-white border-white border-2 text-[1.1rem] leading-[1] bg-pink font-bold flex items-center space-x-1 md:text-[3vw] md:px-[2vw] md:py-[1vw] lg:text-[1.8vw] lg:px-[1.6vw] lg:py-[.7vw] lg:space-x-[1vw] lg:border-[.22vw] lg:rounded-[.6vw]"
            >
              <span>CLICK TO BUY</span>
              <GoPlus />
            </ScrollLink>
          </div>
        </div>
        <div className="absolute bottom-[-6%] left-[50%] translate-x-[-50%] pointer-events-none max-w-[18rem] w-[80%] mx-auto mt-[-18%] z-[-10] sm:max-w-[24rem] sm:mx-auto md:static md:translate-x-0 md:mt-0 md:max-w-none md:w-[44vw] md:min-w-[44vw] lg:absolute lg:bottom-[unset] lg:top-[54%] lg:left-[unset] lg:right-[4vw] lg:translate-y-[-50%] lg:w-[42vw] lg:min-w-[42vw] xl:w-[38vw] xl:min-w-[38vw] xl:top-[52%] xl:right-[5vw]">
          <img src={gift} className="w-full" alt="" />
          <img
            src={dontknow}
            className="absolute top-[67%] left-[40%] translate-x-[-50%] translate-y-[-50%] w-[50%]"
            alt=""
          />
        </div>
      </div>
      <div className="w-full max-w-[26rem] mx-auto py-7 sm:max-w-[100%] md:pt-4 xl:py-[1.8vw] xl:pt-[1.4vw] ">
        <Slider />
      </div>
    </div>
  );
}

export default Hero;
