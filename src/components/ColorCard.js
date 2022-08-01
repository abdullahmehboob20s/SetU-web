import React from "react";
import { MdDone } from "react-icons/md";

function ColorCard({ color, onClick, isSelected }) {
  return (
    <div
      className="w-[1.6rem] h-[1.6rem] rounded-[.4rem] border-2 border-black cursor-pointer relative flex items-center justify-center"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {isSelected ? (
        <MdDone
          className={`text-[1.2rem] ${
            color === "white" ? "text-black" : "text-white"
          } font-bold font-serif`}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ColorCard;
