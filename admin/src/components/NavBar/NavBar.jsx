import React from "react";
import { assets } from "../../assets/assets";

function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-[#323232] border-b border-white/10 px-[4%] h-[70px] flex items-center justify-between">

      {/* Left Side */}
      <div className="flex items-center gap-3">
        <img
          src={assets.logo}
          alt="logo"
          className="w-[70px]"
        />

        <div>
          <h2 className="text-white text-[16px] font-semibold">
            Admin Panel
          </h2>

          <p className="text-slate-400 text-[12px]">
            Food Manager
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Live Status */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

          <p className="text-gray-300 text-[13px]">
            Live
          </p>
        </div>

        {/* Profile */}
        <img
          src={assets.profile_image}
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover"
        />
      </div>
    </div>
  );
}

export default NavBar;