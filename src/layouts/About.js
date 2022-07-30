import React from "react";
import familyImg from "assets/images/family.jpeg";

function About() {
  return (
    <div>
      <div className="px-[2rem]">
        <p className="text-blue text-[1.2rem] uppercase mb-2">About</p>

        <h1 className="text-[1.8rem] font-bold leading-[1.1] text-black ml-3">
          A GIFT FOR OUR LOVED ONES WITH A SLIGHTLY DIFFERENT EXPERIENCE
        </h1>

        <p className="text-[1.2rem] font-normal leading-[1.6] ml-8 mt-4 text-gray">
          EACH OF US FOUND THAT SEARCH FOR A GIFT THIS IS ONE OF THE MOST
          DIFFICULT PROBLEMS IN OUR LIVES FIND THE TIME MAKE OUR RELATIVES SMILE
          AND THAT'S WHY SET FOUR YOU CAME UP IN THE PILOT IN THE ELEGANT AREA
        </p>

        <div className="flex items-center justify-end">
          <button className="text-[1rem] font-normal uppercase mt-4 text-black cursor-pointer border-b-2  border-blue">
            Read More
          </button>
        </div>
      </div>

      <img src={familyImg} className="w-full mt-6" alt="" />
    </div>
  );
}

export default About;
