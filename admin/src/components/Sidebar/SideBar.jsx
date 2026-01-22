import React from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className="sidebar w-[18%] min-h-[100vh] border-[1.5px] border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]">
      <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-5">
        <NavLink to="/add" className="sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p className="hidden lg:block">Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden lg:block">List Items</p>
        </NavLink>
        <NavLink to="/order" className="sidebar-option flex items-center gap-3 border border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden lg:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
