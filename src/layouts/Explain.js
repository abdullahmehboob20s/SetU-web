import React from "react";
import wing from "assets/images/wings.png";
import ExplainationSlider from "components/ExplainationSlider";
import treasure from "assets/images/treasure.png";

function Explain() {
  return (
    <div className="relative">
      <div className="container z-[20] relative">
        <div className="relative">
          <h1 className="uppercase text-[3rem] text-white text-clip blue-border-text text-center font-[950] italic leading-[1]">
            We Are Explain
          </h1>

          <img
            src={wing}
            className="absolute top-[50%] left-[4%] translate-y-[-50%] w-[1.2rem]"
            alt=""
          />
          <img
            src={wing}
            className="absolute top-[50%] right-[2%] translate-y-[-50%] w-[1.2rem] rotate-[184deg]"
            alt=""
          />
        </div>
        <h4 className="text-blue text-center uppercase text-[1.6rem] mb-8">
          IT'S REALLY SIMPLE
        </h4>

        <ExplainationSlider />

        <img src={treasure} className="w-full mt-8" alt="" />
      </div>

      <div className="bg-[#EEEEEE] absolute top-[4%] left-0 w-full h-[60%] z-[10]"></div>
    </div>
  );
}

export default Explain;
