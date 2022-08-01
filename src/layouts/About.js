import React from "react";
import familyImg from "assets/images/family.jpeg";

function About() {
  return (
    <div className="lg:flex lg:items-center lg:flex-row-reverse border-t-[1rem] border-[rgba(112,112,112,0.08)] pt-24">
      <div className="px-[2rem] xl:px-[4rem] xl:pr-[4.2rem]">
        <p className="text-blue text-[1.2rem] uppercase mb-2 xl:text-[1.6rem]">
          About
        </p>

        <h1 className="text-[1.8rem] font-bold leading-[1.1] text-black ml-3 max-w-[9em] xl:text-[2rem]">
          A GIFT FOR OUR LOVED ONES WITH A SLIGHTLY DIFFERENT EXPERIENCE
        </h1>

        <p className="text-[1.2rem] font-normal leading-[1.6] ml-8 mt-4 text-gray xl:text-[1.4rem]">
          EACH OF US FOUND THAT SEARCH FOR A GIFT THIS IS ONE OF THE MOST
          DIFFICULT PROBLEMS IN OUR LIVES FIND THE TIME MAKE OUR RELATIVES SMILE
          AND THAT'S WHY SET FOUR YOU CAME UP IN THE PILOT IN THE ELEGANT AREA
        </p>

        <div className="flex items-center justify-end">
          <button className="text-[1rem] font-normal uppercase mt-4 text-black cursor-pointer border-b-2  border-blue xl:text-[1.2rem]">
            Read More
          </button>
        </div>
      </div>

      <img
        src={familyImg}
        className="w-full mt-6 lg:w-[50%] lg:mt-0 lg:rounded-tr-[1rem] lg:rounded-br-[1rem] lg:shadow-[.6rem_.6rem_20px_rgba(_0,_0,_0,_0.4)]"
        alt=""
      />
    </div>
  );
}

export default About;
