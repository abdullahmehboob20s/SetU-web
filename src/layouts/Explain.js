import React from "react";
import wing from "assets/images/wings.png";
import ExplainationSlider from "components/ExplainationSlider";
import treasure from "assets/images/treasure-2.png";
import ExplainationCard from "components/ExplainationCard";
import useMediaQuery from "hooks/useMediaQuery";

function Explain() {
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");

  return (
    <div className="relative">
      <div
        className={`${
          isAbove1024px ? "px-[5vw]" : "container"
        }  z-[20] relative lg:flex lg:justify-between lg:py-[4vw]`}
      >
        <div className="lg:absolute lg:top-[4vw] lg:right-[-4vw] lg:w-[60vw]">
          <div className="relative sm:w-[60%] sm:mx-auto  ">
            <h1 className="uppercase text-[3rem] text-white text-clip blue-border-text text-center font-[950] italic leading-[1] lg:text-[7vw]">
              We Are Explain
            </h1>

            <img
              src={wing}
              className="absolute top-[50%] left-[4%] translate-y-[-50%] w-[1.2rem] lg:left-[unset] lg:right-[100%] lg:w-[2.2vw]"
              alt=""
            />
            <img
              src={wing}
              className="absolute top-[50%] right-[2%] translate-y-[-50%] w-[1.2rem] rotate-[184deg] lg:right-[auto] lg:left-[106%] lg:w-[2.2vw]"
              alt=""
            />
          </div>
          <h4 className="text-blue text-center uppercase text-[1.6rem] mb-8 lg:mb-0 lg:text-[3vw]">
            IT'S REALLY SIMPLE
          </h4>
        </div>

        <div className="sm:w-[60%] sm:mx-auto lg:hidden">
          <ExplainationSlider />
        </div>

        <img
          src={treasure}
          className="w-full mt-8 sm:w-[60%] sm:mx-auto lg:absolute lg:top-[66%] lg:left-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%] lg:mt-0 lg:w-[44vw]"
          alt=""
        />

        {/* FOR MOBILE */}

        <div className="hidden lg:flex lg:flex-col lg:w-[24vw] space-y-[2vw]">
          <ExplainationCard
            index="05"
            title="FINISH IN A BOX"
            subtitle="THE CASE COMES IN A BOX AND CAN BE UPGRADED"
            borderBottom={true}
          />

          <ExplainationCard
            index="04"
            title="HERE WE ARE SURPRISING"
            subtitle="YOU CAN CHOOSE WHICH MALE COLOR TO CHOOSE BUT IF YOU CHOSE COLORFUL WE WILL SURPRISE YOU  SPECIAL SOCKS"
            borderBottom={true}
          />
          <ExplainationCard
            index="03"
            title="WHAT WILL I KEEP ON THE PANTS?"
            subtitle="WE WILL CHOOSE THE BELT FOR OUR LOVED ONES THE MOST SUITABLE FOR THEIR LOOK"
          />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:w-[22vw] space-y-[2vw] lg:justify-end">
          <ExplainationCard
            index="01"
            title="What Kind Of Shirt"
            subtitle="CHOOSE THE APPROPRIATE VERSION AND COLOR ACCORDING TO THE MEASURING TAPE"
            borderBottom={true}
          />

          <ExplainationCard
            index="02"
            title="WHICH IS YOUR FAVORITE MORE"
            subtitle="BOW TIE OR TIE, IN ADDITION YOU CAN CHOOSE THEIR FAVORITE COLOR"
          />
        </div>
      </div>

      <div className="bg-[#EEEEEE] absolute top-[4%] left-0 w-full h-[60%] z-[10] lg:h-full lg:top-0"></div>
    </div>
  );
}

export default Explain;
