import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <footer className="bg-[#323232] border-t border-white/10 px-[4%] py-4 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Left Side */}
        <div className="flex items-center gap-3">
          <img
            src={assets.logo}
            alt="logo"
            className="w-[60px]"
          />

          <div>
            <h2 className="text-white text-[16px] font-semibold">
              Food Admin Panel
            </h2>

            <p className="text-slate-400 text-[12px] mt-1">
              Manage your food items easily
            </p>
          </div>
        </div>

        {/* Center Live Status */}
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>

          <p className="text-gray-300 text-[13px]">
            System Live
          </p>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-right">
          <p className="text-white text-[13px] font-medium">
            Chanabasappa Sinnur
          </p>

          <p className="text-slate-400 text-[12px] mt-1">
            channusinnu22072002@gmail.com
          </p>

          <p className="text-slate-400 text-[12px] mt-1">
            9322605251
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;