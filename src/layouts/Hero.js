import React from "react";
import heroBg from "assets/images/hero-bg.png";

function Hero() {
  return (
    <div className="p-[2vw] min-h-screen flex flex-col">
      <div className="relative h-full flex-1">
        <img
          src={heroBg}
          className="absolute top-0 left-0 w-full h-full z-[-10]"
          alt=""
        />
        <h1 className="uppercase">explanation</h1>
        <h1>Hero</h1>
        <h1>Hero</h1>
        <h1>Hero</h1>
        <h1>Hero</h1>
      </div>
    </div>
  );
}

export default Hero;
