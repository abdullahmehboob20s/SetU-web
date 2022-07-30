import React from "react";
import letsStartChoosingTitle from "assets/images/lets-start-choosing.png";
import ProductCard from "components/ProductCard";
import shirt from "assets/images/shirt-man.png";
import shirt2 from "assets/images/shirt-2.png";
import shirt3 from "assets/images/shirt-3.png";
import shirt4 from "assets/images/shirt-4.png";

import ptie1 from "assets/images/ptie-1.png";
import ptie2 from "assets/images/ptie-2.png";
import ptie3 from "assets/images/ptie-3.png";
import ptie4 from "assets/images/ptie-4.png";

import belt1 from "assets/images/belt-1.png";

import socks1 from "assets/images/socks-1.png";
import socks2 from "assets/images/socks-2.png";
import socks3 from "assets/images/socks-3.png";

function LetsStartChoosing() {
  return (
    <div>
      <img src={letsStartChoosingTitle} className="w-full mb-6" alt="" />
      <div className="container space-y-10">
        <ProductCard
          productName="BUTTONED SHIRT"
          productSpeciality="CUT AND FABRIC COMPOSITION-"
          description="ELEGANT BUTTON-UP SHIRT, STANDARD COLLAR MODEL, BUTTONS EXPOSED SATIN FABRIC. ELEGANT BUTTON-DOWN SHIRT WITH REGULAR COLLAR EXPOSED BUTTONS IN A VARIETY OF COLORS"
          productTypes={[
            { title: "Super Slim 97/3" },
            { title: "Square 80/20" },
          ]}
          sizeChart={{
            value: true,
            title: "Size Chart",
          }}
          colors={{
            isORDivision: false,
            values: [
              { value: "#51B8FA" },
              { value: "#D451FA" },
              { value: "black" },
              { value: "white" },
            ],
          }}
          sizes={[
            { value: "XS" },
            { value: "SM" },
            { value: "MD" },
            { value: "XL" },
          ]}
          images={[
            {
              img: shirt,
            },
            {
              img: shirt2,
            },
            {
              img: shirt3,
            },
            {
              img: shirt4,
            },
          ]}
        />

        <ProductCard
          productName="A JEWEL FOR A SHIRT"
          productSpeciality="WHAT DO YOU LIKE MORE-"
          description="BLACK BOW TIE, SOLID COLOR.
          HAS A SUBTLE SHINE THAT GIVES PRESENCE AND PLEASANTNESS.
          EASY TO USE, ADJUSTABLE STRAP FOR ANY NECK AND EASY CLOSURE."
          productTypes={[{ title: "NECKTIE" }, { title: "PAPILLON" }]}
          sizeChart={false}
          colors={{
            isORDivision: false,
            values: [
              { value: "#CCCCCC" },
              { value: "#0018FF" },
              { value: "black" },
              { value: "#E82B34" },
            ],
          }}
          images={[
            {
              img: ptie1,
            },
            {
              img: ptie2,
            },
            {
              img: ptie3,
            },
            {
              img: ptie4,
            },
          ]}
        />

        <ProductCard
          productName="CHOOSE A BELT FOR YOUR PANTS"
          productSpeciality="WHAT A BUCKLE-"
          description="A MODEL MADE OF 100% FINE LEATHER IN A BLACK SHADE WITH A GLOSSY FINISH.
          THIS IS AN ITEM THAT WILL LUXURIOUSLY UPGRADE
          ANY PAIR OF PANTS FOR DAYTIME AND EVENING HOURS."
          productTypes={[
            { title: "CLASSIC" },
            { title: "CLUTCH" },
            { title: "CLASP" },
            { title: "ELEGANT" },
          ]}
          sizeChart={false}
          images={[
            {
              img: belt1,
            },
            {
              img: ptie2,
            },
            {
              img: ptie3,
            },
            {
              img: ptie4,
            },
          ]}
        />

        <ProductCard
          productName="THE SOCKS"
          description="A MODEL MADE OF 100% FINE LEATHER IN A BLACK SHADE WITH A GLOSSY FINISH.
          THIS IS AN ITEM THAT WILL LUXURIOUSLY UPGRADE
          ANY PAIR OF PANTS FOR DAYTIME AND EVENING HOURS."
          sizeChart={false}
          colors={{
            isORDivision: true,
            values: [
              { value: "rainbow" },
              { value: "black" },
              { value: "white" },
            ],
          }}
          images={[
            {
              img: socks1,
            },
            {
              img: socks2,
            },
            {
              img: socks3,
            },
          ]}
        />

        <div className="flex flex-col items-center mt-[2rem] space-y-2">
          <button className="text-[2rem] font-bold text-white bg-green py-[.2rem] px-[2.2rem] rounded-[.6rem] ">
            CLICK TO PAY
          </button>
          <p className="text-[2rem]">(500₪)</p>
        </div>
      </div>
    </div>
  );
}

export default LetsStartChoosing;
