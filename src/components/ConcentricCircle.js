import React from "react";

function ConcentricCircle({ className, index, active }) {
  return (
    <div
      className={`min-w-[2.2rem] h-[2.2rem] rounded-full absolute ${className} transition-all duration-[.3s] z-[1] flex items-center justify-center lg:min-w-[3.4vw] lg:h-[3.4vw]  ${
        active ? "bg-[rgba(255,104,25,0.4)]" : "bg-[rgba(3,135,212,0.4)]"
      }`}
    >
      <div
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%] h-[60%] z-[-1] rounded-full transition-all duration-[.3s] ${
          active ? "bg-[#FF6819]" : "bg-[#0388D4]"
        }`}
      ></div>

      <p className="text-white text-[.8rem] font-sans font-bold relative bottom-[0.06em] lg:text-[1.2vw]">
        {index}
      </p>
    </div>
  );
}

export default ConcentricCircle;
