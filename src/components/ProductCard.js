import React, { useState } from "react";
import ColorCard from "./ColorCard";
import { BiChevronDown } from "react-icons/bi";
import ProductSelectionCard from "./ProductSelectionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import rainbowBg from "assets/images/rainbowBg.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductCard({
  productName,
  productSpeciality,
  description,
  productTypes,
  sizeChart,
  colors,
  sizes,
  images,
}) {
  const [selectedImg, setSelectedImg] = useState(images[0].img);

  return (
    <div className="md:flex md:flex-row-reverse">
      <div className="md:flex-1 md:flex md:flex-col md:justify-between">
        <div>
          <h1 className="text-[1.8rem] leading-[1.2] font-bold text-black mb-1 xl:text-[3.2rem]">
            {productName}
          </h1>
          {productSpeciality ? (
            <p className="text-gray text-[1.1rem] font-semibold mb-2 xl:text-[1.6rem]">
              {productSpeciality}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center space-x-2 flex-wrap mb-4">
            {productTypes &&
              productTypes.map((item, index) => (
                <>
                  <button
                    key={index}
                    className="border-2 rounded-[.4rem] px-[.4rem] py-[.1rem] font-bold text-[.9rem] text-black uppercase xl:text-[1.4rem]"
                  >
                    {item.title}
                  </button>

                  {index === productTypes.length - 1 ? null : (
                    <span className="text-[1rem] font-bold uppercase xl:text-[1.2rem]">
                      OR
                    </span>
                  )}
                </>
              ))}

            {sizeChart || sizeChart.value ? (
              <button className="border-b-2 border-blue text-[.8rem] text-black uppercase xl:text-[1.1rem]">
                {sizeChart.title ? sizeChart.title : "Size Chart"}
              </button>
            ) : (
              ""
            )}
          </div>

          {colors ? (
            <div className="mb-4">
              <p className="text-gray text-[1.1rem] font-bold mb-1 uppercase xl:text-[1.6rem]">
                Color -
              </p>

              <div className="flex items-center space-x-2">
                {colors.values.map((item, index) => (
                  <>
                    {item.value === "rainbow" ? (
                      <div className="relative py-[.04rem] px-[.6rem] border-2 rounded-[.4rem] cursor-pointer overflow-hidden">
                        <p className="font-bold text-black uppercase text-[1rem] z-[2] xl:text-[1.4rem]">
                          Rainbow
                        </p>
                        <img
                          src={rainbowBg}
                          className="absolute top-0 left-0 w-full h-full z-[-2]"
                          alt=""
                        />
                      </div>
                    ) : (
                      <ColorCard color={item.value} />
                    )}

                    {colors.isORDivision &&
                    index !== colors.values.length - 1 ? (
                      <span className="text-[1rem] font-bold uppercase">
                        OR
                      </span>
                    ) : null}
                  </>
                ))}
              </div>
            </div>
          ) : null}

          {sizes ? (
            <div className="mb-6">
              <p className="text-gray text-[1.1rem] font-bold mb-1 uppercase xl:text-[1.6rem]">
                Size -
              </p>

              <div className="relative w-fit">
                <select
                  id="cars"
                  className="text-[1.4rem] text-black font-bold border-2 rounded-[.4rem] block min-w-[4.6rem] px-[.4rem] py-[.1rem] relative hide-select-dropdown-icon xl:text-[1.6rem]"
                >
                  {sizes.map((item, index) => (
                    <option key={index} value="volvo">
                      {item.value}
                    </option>
                  ))}
                </select>

                <span className="block absolute top-[50%] right-[.2rem] pointer-events-none translate-y-[-50%] text-[1.5rem]">
                  <BiChevronDown />
                </span>
              </div>
            </div>
          ) : null}
        </div>

        <div className="bg-gray-100 py-[.4rem] px-[1.2rem] rounded-[.4rem] mb-6 md:mb-0">
          <div className="text-black text-[1.1rem] font-bold uppercase relative w-fit mb-2 xl:text-[1.4rem]">
            Description
            <div className="absolute top-[100%] left-0 w-[40%] h-[2px] bg-blue"></div>
          </div>

          <p className="text-gray text-[1rem] leading-[1.6] xl:text-[1.2rem]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex space-x-1 md:flex-1 md:mr-[2rem]">
        <div className="w-[5rem] min-h-full relative md:w-[6rem]">
          <div className="w-full absolute top-0 left-0 h-full ">
            <Swiper
              slidesPerView="auto"
              spaceBetween={5}
              direction="vertical"
              className="product-selection-swiper"
            >
              {images.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                  onClick={() => setSelectedImg(item.img)}
                >
                  <ProductSelectionCard img={item.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex-1 w-full h-full">
          <img
            src={selectedImg}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
