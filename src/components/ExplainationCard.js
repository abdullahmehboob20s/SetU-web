import React from "react";

function ExplainationCard({ title, subtitle, index, borderBottom = false }) {
  return (
    <div
      className={`${
        borderBottom ? "lg:border-b-[.2vw] lg:border-blue lg:pb-[1.2vw]" : ""
      }`}
    >
      <p className="text-blue text-[1rem] leading-[1] font-bold lg:text-[1.4vw] lg:mb-[.8vw]">
        {index}
      </p>
      <p className="text-[1.4rem] text-black uppercase mb-1 font-bold leading-[1.2] lg:text-[2vw] lg:mb-[.4vw]">
        {title}
      </p>
      <p className="uppercase text-gray leading-[1.6] text-[1.2rem] lg:text-[1.4vw] lg:leading-[2.4vw]">
        {subtitle}
      </p>
    </div>
  );
}

export default ExplainationCard;
