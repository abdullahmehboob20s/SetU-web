import React from "react";

function ColorCard({ color }) {
  return (
    <div
      className="w-[1.6rem] h-[1.6rem] rounded-[.4rem] border-2 border-black cursor-pointer"
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorCard;
