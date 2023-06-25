import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export default function footer() {
  return (
    <>
      <div className="bg-[#2798fc] p-12">
        <div className="max-w-[1240px] mx-auto text-white grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="col-span-2 md:col-span-1">
            <h1 className="w-full font-bold text-black text-3xl">AJstyles903</h1>
            <p className="text-[10px] md:text-[16px] py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium blanditiis voluptate asperiores impedit.
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
            </div>
          </div>
          <div className="lg:flex justify-between col-span-2 mt-2">
            <div>
              <h6 className="font-medium text-black">Solutions</h6>
              <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">insights</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-black">Support</h6>
              <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-black">Company</h6>
              <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Press</li>
                <li className="py-2 text-sm">Careers</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-black">Legal</h6>
              <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
