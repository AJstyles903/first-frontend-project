import React from "react";

export default function notify() {
  return (
    <>
      <div className="bg-[#2798fc] p-12">
        <div className="max-w-[1240px] mx-auto text-white block md:flex justify-between py-12">
          <div>
            <h1 className="text-[37px] font-bold">
              Want to learn latest IT skills?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <div>
            <input className="p-[10px] rounded-md text-black mr-4" type="email" name="email" placeholder="Enter Email" id="email" />
            <button className="p-[10px] px-[30px] rounded-md bg-black font-medium">Notify Me</button>
            </div>
            <p className="max-w-[350px] mt-5">
              We care about the protection of your data. Read Our
              <span className="text-[#053a7b]"> Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
