import React from "react";
import double from "../assets/double.png";
import single from "../assets/single.png";
import triple from "../assets/triple.png";

export default function notify() {
  return (
    <>
      <div className="bg-white max-w-[1240px] mx-0 md:mx-auto py-[120px] px-[100px] md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex-col p-3 text-center hover:scale-105 duration-30 rounded-lg mt-[100px] md:mt-0">
            <img className="w-20 mx-auto mt-[-65px] bg-transparent" src={single} alt="Error 404" />
            <h1 className="font-bold py-4 text-[25px]">Web Development</h1>
            <p className="font-bold py-4 text-[40px]">$149</p>
            <div>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet.</p>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet.</p>
              <button className="bg-[#02df9c] rounded-md px-[60px] py-2 font-medium border border-black my-8">Start Trial</button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-3 text-center bg-gray-100 hover:scale-105 duration-30 rounded-lg mt-[100px] md:mt-0">
         <img className="w-20 mx-auto mt-[-65px] bg-transparent" src={double} alt="Error 404" />
            <h1 className="font-bold py-4 text-[25px]">Digital Marketing</h1>
            <p className="font-bold py-4 text-[40px]">$149</p>
            <div>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet.</p>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet.</p>
              <button className="bg-[#02df9c] rounded-md px-[60px] py-2 font-medium border border-black my-8">Start Trial</button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-3 text-center hover:scale-105 duration-30 rounded-lg mt-[100px] md:mt-0">
            <img className="w-20 mx-auto mt-[-65px] bg-transparent" src={triple} alt="Error 404" />
            <h1 className="font-bold py-4 text-[25px]">App Development</h1>
            <p className="font-bold py-4 text-[40px]">$149</p>
            <div>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet.</p>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-1.5xl font-medium border-b mx-6 mt-4 py-2">Lorem ipsum dolor sit amet.</p>
              <button className="bg-[#02df9c] rounded-md px-[60px] py-2 font-medium border border-black my-8">Start Trial</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
