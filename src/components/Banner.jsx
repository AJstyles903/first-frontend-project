import React from "react";
import Typed from "react-typed";

export default function Banner() {
  return (
    <>
      <div className="bg-[#2798fc] w-full py-[50px] h-auto">
        <div className="max-w-[1240px] font-bold py-[100px] text-center mx-auto mt-[20px]">
          <div className="text-[20px] md:text-[30px] md:p-[20px]">
            Learn With Us
          </div>
          <h2 className="text-white font-bold text-3xl md:text-[60px] md:p-[20px] ">
            Grow With Us.
          </h2>
          <div className="text-[20px] md:text-[40px] text-white md:p-[20px]">
            Learn &nbsp;
            <Typed strings={['Web Development','Ethical Hacking']} typeSpeed={70} backSpeed={70} loop />
          </div>
          <button className="bg-black text-white font-medium text-[10px] md:text-[20px] rounded-lg px-[20px] md:px-[60px] p-1 md:p-3">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
