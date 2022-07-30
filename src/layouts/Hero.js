import React from "react";
import heroBg from "assets/images/hero-bg.png";
import set4you from "assets/images/set4you.png";
import set4U from "assets/images/set4U.png";
import { IoMdArrowRoundDown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import gift from "assets/images/gift.png";
import dontknow from "assets/images/dontknow.png";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-[auto] flex-1 py-[2rem] px-[1.7rem] pb-0">
        <img
          src={heroBg}
          className="absolute top-0 left-0 w-full h-[92%] z-[-10]"
          alt=""
        />
        <div className="mb-8 flex justify-center">
          <img src={set4U} alt="" className="w-[6rem]" />
        </div>

        <img src={set4you} className="w-full" alt="" />

        <h1 className="font-lunchBox text-[2.4rem] text-white italic font-[700] text-center pink-border-text mt-[-2rem]">
          SEND LOVE IN A PACKAGE!
        </h1>

        <p className="text-center text-[1.3rem] text-white leading-[1.2]">
          FOR THE FIRST TIME IN ISRAEL A PILOT DEDICATED ENTIRELY TO THE SMALL
          EXPERIENCES AND THRILLS IN LIFE
        </p>

        <div className="flex items-center space-x-4 justify-center mt-8 cursor-pointer">
          <button className="px-4 py-2 rounded-[.6rem] text-black border-white border-2 text-[1.3rem] leading-[1] bg-yellow font-bold flex items-center space-x-1">
            <span>EXPLANATION</span>
            <IoMdArrowRoundDown />
          </button>
          <button className="px-4 py-2 rounded-[.6rem] text-white border-white border-2 text-[1.3rem] leading-[1] bg-pink font-bold flex items-center space-x-1">
            <span>CLICK TO BUY</span>
            <GoPlus />
          </button>
        </div>

        <div className="w-full relative mt-[-18%] z-[-10]">
          <img src={gift} className="w-full" alt="" />
          <img
            src={dontknow}
            className="absolute top-[67%] left-[40%] translate-x-[-50%] translate-y-[-50%] w-[50%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
