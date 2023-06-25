import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-[#2798fc] p-[20px]">
        <div className="flex justify-between items-center py-3 mx-auto max-w-[1240px]">
          <div className="text-3xl cursor-pointer font-medium">AJstyles903</div>
          <ul className="hidden md:flex text-white gap-10">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          {/* Responsive Part */}
          {
            toggle ? 
            <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white cursor-pointer text-2xl md:hidden block"/>
            : 
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white cursor-pointer text-2xl md:hidden block"/>
          }
          <ul className={`duration-300 md:hidden text-white fixed bg-black ${toggle? 'left-0' : 'left-[-100%]'} top-[100px] w-full h-screen`}>
            <li className="cursor-pointer p-4">Home</li>
            <li className="cursor-pointer p-4">Resources</li>
            <li className="cursor-pointer p-4">Resources</li>
            <li className="cursor-pointer p-4">About</li>
            <li className="cursor-pointer p-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
