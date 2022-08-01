import React, { useState } from "react";
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

import necktie from "assets/images/necktie.png";
import papillontie from "assets/images/papillontie.png";

function LetsStartChoosing() {
  const [isAbleToPay, setIsAbleToPay] = useState(false);

  return (
    <div>
      <img
        src={letsStartChoosingTitle}
        className="w-full mb-6 md:w-[60%] md:mx-auto lg:w-[28rem]"
        alt=""
      />

      <div className="container space-y-10">
        <ProductCard
          productName="BUTTONED SHIRT"
          productSpeciality="CUT AND FABRIC COMPOSITION-"
          description="ELEGANT BUTTON-UP SHIRT, STANDARD COLLAR MODEL, BUTTONS EXPOSED SATIN FABRIC. ELEGANT BUTTON-DOWN SHIRT WITH REGULAR COLLAR EXPOSED BUTTONS IN A VARIETY OF COLORS"
          productTypes={[
            { id: "1", title: "Super Slim 97/3", isSelected: false },
            { id: "2", title: "Square 80/20", isSelected: false },
          ]}
          sizeChart={{
            value: true,
            title: "Size Chart",
          }}
          colors={{
            isORDivision: false,
            values: [
              { id: "1", value: "#51B8FA", isSelected: false },
              { id: "2", value: "#D451FA", isSelected: false },
              { id: "3", value: "black", isSelected: false },
              { id: "4", value: "white", isSelected: false },
            ],
          }}
          sizes={{
            selectedSize: "",
            diffrentSizes: [
              { id: "1", value: "XS", isSelected: false },
              { id: "2", value: "S", isSelected: false },
              { id: "3", value: "M", isSelected: false },
              { id: "4", value: "L", isSelected: false },
              { id: "5", value: "XL", isSelected: false },
              { id: "6", value: "XXL", isSelected: false },
              { id: "7", value: "3XL", isSelected: false },
            ],
          }}
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
          productTypes={[
            { id: "1", title: "NECKTIE", iconImg: necktie, isSelected: false },
            {
              id: "2",
              title: "PAPILLON",
              iconImg: papillontie,
              isSelected: false,
            },
          ]}
          sizeChart={false}
          colors={{
            isORDivision: false,
            values: [
              { id: "1", value: "#CCCCCC", isSelected: false },
              { id: "2", value: "#0018FF", isSelected: false },
              { id: "3", value: "black", isSelected: false },
              { id: "4", value: "#E82B34", isSelected: false },
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
            { id: "1", title: "CLASSIC", isSelected: false },
            { id: "2", title: "CLUTCH", isSelected: false },
            { id: "3", title: "CLASP", isSelected: false },
            { id: "4", title: "ELEGANT", isSelected: false },
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
              { id: "1", value: "rainbow", isSelected: false },
              { id: "2", value: "black", isSelected: false },
              { id: "3", value: "white", isSelected: false },
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
          <button
            onClick={() => setIsAbleToPay((val) => !val)}
            className={`text-[2rem] font-bold  py-[.2rem] px-[2.2rem] rounded-[.6rem] ${
              isAbleToPay
                ? "text-white bg-green border-2 border-transparent"
                : "text-black bg-transparent border-2 border-black"
            }`}
          >
            CLICK TO PAY
          </button>
          <p
            className={`text-[2rem] ${
              isAbleToPay
                ? "opacity-[1] pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            (500₪)
          </p>
        </div>
      </div>
    </div>
  );
}

export default LetsStartChoosing;
