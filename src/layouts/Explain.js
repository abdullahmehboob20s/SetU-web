import React, { useState } from "react";
import wing from "assets/images/wings.png";
import ExplainationSlider from "components/ExplainationSlider";
import treasure from "assets/images/treasure-2.png";
import ExplainationCard from "components/ExplainationCard";
import useMediaQuery from "hooks/useMediaQuery";
import ConcentricCircle from "components/ConcentricCircle";

function Explain() {
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");
  const [swiperActiveSlide, setSwiperActiveSlide] = useState("asdasd");
  const [cardIndex, setCardIndex] = useState(1);

  return (
    <div className="relative">
      <div
        className={`${
          isAbove1024px ? "px-[5vw]" : "container"
        }  z-[20] relative lg:flex lg:justify-between lg:py-[4vw]`}
      >
        <div className="lg:absolute lg:top-[4vw] lg:right-[-4vw] lg:w-[60vw]">
          <div className="relative sm:w-[60%] sm:mx-auto  ">
            <h1 className="uppercase text-[3rem] text-white text-clip blue-border-text text-center font-[950] leading-[1] lg:text-[7vw] drop-shadow-[0em_.034em_.012em_rgba(0,0,0,.5)]">
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

        {isAbove1024px ? null : (
          <div className="sm:w-[60%] sm:mx-auto lg:hidden">
            <ExplainationSlider
              setSwiperActiveSlide={isAbove1024px ? null : setSwiperActiveSlide}
            />
          </div>
        )}

        <div className="w-full mt-8 sm:w-[60%] sm:mx-auto relative lg:absolute lg:top-[66%] lg:left-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%] lg:mt-0 lg:w-[44vw] flex">
          <ConcentricCircle
            className="top-[6%] left-[14%]"
            index="5"
            active={
              isAbove1024px
                ? cardIndex === 5
                  ? true
                  : false
                : swiperActiveSlide === 4
                ? true
                : false
            }
          />
          <ConcentricCircle
            className="top-[36%] left-[44%]"
            index="1"
            active={
              isAbove1024px
                ? cardIndex === 1
                  ? true
                  : false
                : swiperActiveSlide === 0
                ? true
                : false
            }
          />
          <ConcentricCircle
            className="top-[72%] left-[58%]"
            index="3"
            active={
              isAbove1024px
                ? cardIndex === 3
                  ? true
                  : false
                : swiperActiveSlide === 2
                ? true
                : false
            }
          />
          <ConcentricCircle
            className="top-[70%] left-[80%]"
            index="4"
            active={
              isAbove1024px
                ? cardIndex === 4
                  ? true
                  : false
                : swiperActiveSlide === 3
                ? true
                : false
            }
          />
          <ConcentricCircle
            className="top-[54%] left-[82%]"
            index="2"
            active={
              isAbove1024px
                ? cardIndex === 2
                  ? true
                  : false
                : swiperActiveSlide === 1
                ? true
                : false
            }
          />
          <img src={treasure} className="w-full h-full" alt="" />
        </div>

        {/* FOR MOBILE */}

        <div className="hidden lg:flex lg:flex-col lg:w-[24vw] space-y-[2vw]">
          <ExplainationCard
            index="05"
            title="FINISH IN A BOX"
            subtitle="THE CASE COMES IN A BOX AND CAN BE UPGRADED"
            borderBottom={true}
            events={{
              onMouseOver: () => setCardIndex(5),
            }}
          />

          <ExplainationCard
            index="04"
            title="HERE WE ARE SURPRISING"
            subtitle="YOU CAN CHOOSE WHICH MALE COLOR TO CHOOSE BUT IF YOU CHOSE COLORFUL WE WILL SURPRISE YOU  SPECIAL SOCKS"
            borderBottom={true}
            events={{
              onMouseOver: () => setCardIndex(4),
            }}
          />
          <ExplainationCard
            index="03"
            title="WHAT WILL I KEEP ON THE PANTS?"
            subtitle="WE WILL CHOOSE THE BELT FOR OUR LOVED ONES THE MOST SUITABLE FOR THEIR LOOK"
            events={{
              onMouseOver: () => setCardIndex(3),
            }}
          />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:w-[22vw] space-y-[2vw] lg:justify-end">
          <ExplainationCard
            index="01"
            title="What Kind Of Shirt"
            subtitle="CHOOSE THE APPROPRIATE VERSION AND COLOR ACCORDING TO THE MEASURING TAPE"
            borderBottom={true}
            events={{
              onMouseOver: () => setCardIndex(1),
            }}
          />

          <ExplainationCard
            index="02"
            title="WHICH IS YOUR FAVORITE MORE"
            subtitle="BOW TIE OR TIE, IN ADDITION YOU CAN CHOOSE THEIR FAVORITE COLOR"
            events={{
              onMouseOver: () => setCardIndex(2),
            }}
          />
        </div>
      </div>

      <div className="bg-[#EEEEEE] absolute top-[4%] left-0 w-full h-[60%] z-[10] lg:h-full lg:top-0"></div>
    </div>
  );
}

export default Explain;
