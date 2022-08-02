import React, { useEffect, useState } from "react";
import letsStartChoosingTitle from "assets/images/lets-start-choosing.png";
import { useSelector } from "react-redux";
import ProductCard from "components/ProductCard";

function LetsStartChoosing() {
  const [isAbleToPay, setIsAbleToPay] = useState(false);
  const productStateValue = useSelector((state) => state.productsState);

  useEffect(() => {
    let isTrue = false;

    productStateValue.selectedProducts.every((element) => {
      if (
        element.productType === "none" ||
        element.productColor === "none" ||
        element.productSize === "none"
      ) {
        return (isTrue = false);
      } else {
        return (isTrue = true);
      }
    });

    setIsAbleToPay(isTrue);
  }, [productStateValue.selectedProducts]);

  return (
    <div>
      <img
        src={letsStartChoosingTitle}
        className="w-full mb-6 md:w-[60%] md:mx-auto lg:w-[28rem]"
        alt=""
      />

      <div className="container space-y-10">
        {productStateValue.data.map((product, index) => {
          return <ProductCard {...product} key={index} />;
        })}

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
