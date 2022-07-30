import React from "react";

function ExplainationCard({ title, subtitle, index }) {
  return (
    <div>
      <p className="text-blue text-[1rem] leading-[1] font-bold">{index}</p>
      <p className="text-[1.4rem] text-black uppercase mb-1 font-bold leading-[1.2]">
        {title}
      </p>
      <p className="uppercase text-gray leading-[1.6] text-[1.2rem]">
        {subtitle}
      </p>
    </div>
  );
}

export default ExplainationCard;
