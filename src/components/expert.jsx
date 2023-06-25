import React from "react";
import laptop from "../assets/laptop.jpg";

export default function expert() {
    return (
      <>
        <div className="bg-white max-w-[1240px] justify-between mx-12 md:mx-auto h-auto p-[120px] px-0 block md:flex ">
            <div className="w-[260px] md:w-[300px] mx-auto">
                <img src={laptop} alt="Error 404" />
            </div>
            <div className="m-auto mt-[15px] md:items-center max-w-[400px] md:max-w-[610px] mx-auto md:mx-0">
                <h1 className="text-[#2798fc] font-bold text-[10px] md:text-[16px]">
                    LEARN FROM EXPERTS
                </h1>
                <p className="text-[10px] md:text-[16px]">
                    Lorem ipsum laboriosam dolorem dolores provident fuga deserunt doloremque laborum eum fugiat sapiente incidunt esse nemo inventore, impedit voluptate vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <button className="bg-black mt-5 text-white font-normal text-[10px] md:text-[16px] rounded-lg px-[20px] md:px-[60px] p-1 md:p-[12px]">
            Get Started
                </button>
            </div>
        </div>
      </>
    );
  }