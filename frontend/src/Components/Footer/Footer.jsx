import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className="bg-[#323232] text-[#d9d9d9] py-20 px-8 mt-24 w-full" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-20">
          {/* Left Section */}
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-2">
              <img 
                src={assets.logo}
                alt="Tomato Logo" 
                className="w-[150px]  rounded-lg"
              />
              {/* <h1 className="text-[#ff6347] text-4xl font-bold">Tomato.</h1> */}
            </div>
            <p className=" ">
              Tomato brings delicious meals right to your doorstep. From local favorites to 
              gourmet cuisines, we connect you with the best restaurants in your area.
              <br /><br />
              Fast delivery, fresh food, and exceptional service - that's our promise to you.
            </p>
            <div className="flex gap-4 mt-2">
              <div className="w-10 h-10 rounded-full border-2 border-[#d9d9d9] flex items-center justify-center cursor-pointer hover:bg-[#ff6347] hover:border-[#ff6347] transition-all duration-300">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#d9d9d9] flex items-center justify-center cursor-pointer hover:bg-[#ff6347] hover:border-[#ff6347] transition-all duration-300">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#d9d9d9] flex items-center justify-center cursor-pointer hover:bg-[#ff6347] hover:border-[#ff6347] transition-all duration-300">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          {/* Center Section - Company */}
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-white text-xl font-semibold tracking-wide">COMPANY</h2>
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-white transition-colors">Home</li>
              <li className="cursor-pointer hover:text-white transition-colors">About us</li>
              <li className="cursor-pointer hover:text-white transition-colors">Delivery</li>
              <li className="cursor-pointer hover:text-white transition-colors">Privacy policy</li>
            </ul>
          </div>

          {/* Right Section - Get in Touch */}
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-white text-xl font-semibold tracking-wide">GET IN TOUCH</h2>
            <ul className="space-y-3">
              <li>+91 9322605251</li>
              <li>channusinnur22072002@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#404040] my-8 mt-12" />

        {/* Copyright */}
        <p className="text-center text-sm md:text-center">
          Copyright 2026 © channusinnur22072002@gmail.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;