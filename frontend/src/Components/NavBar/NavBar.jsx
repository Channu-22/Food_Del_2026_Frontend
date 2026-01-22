import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { toast } from "react-toastify";

// tomato-text-[#ff6347]
// text-#49557e
// bg-#fff4f2

function NavBar({ setShowlogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  async function logOut() {
    localStorage.removeItem("token")
    setToken("");
    toast.error("Logged out successfully")
    navigate("/");
    
  }

  return (
    <div className="navbar flex items-center justify-between py-5">
      <Link to="/">
        <img
          src={assets.logo}
          alt=""
          className="logo w-[150px] max-[1050px]:w-[140px] max-[875px]:w-[120px]"
        />
      </Link>
      <ul
        className="navabar_menu  flex items-cente
         gap-5 max-[1050px]:gap-[18px] max-[875px]:gap-[15px] 
        text-[#49557e] text-[18px] max-[1050px]:text-[17px]
         max-[875px]:text-[16px] max-[780px]:hidden"
      >
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={` ${
            menu === "home"
              ? "active pb-[2px] border-b-2 border-[#49557e]"
              : " "
          } cursor-pointer  `}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={` ${
            menu === "menu"
              ? "active pb-[2px] border-b-2 border-[#49557e]"
              : " "
          } cursor-pointer  `}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={` ${
            menu === "mobile-app"
              ? "active pb-[2px] border-b-2 border-[#49557e]"
              : " "
          }  cursor-pointer `}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={` ${
            menu === "contact-us"
              ? "active pb-[2px] border-b-2 border-[#49557e]"
              : " "
          } cursor-pointer `}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right flex items-center gap-10 max-[1050px]:gap-[30px] max-[875px]:gap-5">
        <img
          src={assets.search_icon}
          alt=""
          className="max-[1050px]:w-[22px] max-[875px]:w-5"
        />
        <div className="navbar-search-icon relative  ">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="" />
          </Link>
          <div
            className={`${
              getTotalCartAmount() === 0
                ? ""
                : "dot absolute min-h-[10px] min-w-[10px] bg-[#ff6347] rounded-[5px] top-[-8px] right-[-8px]"
            }`}
          ></div>
        </div>
        {!token ? (
          <button
            onClick={() => setShowlogin(true)}
            className="bg-transparent text-[#49557e] 
            px-[30px] py-[10px] max-[1050px]:px-[25px] max-[1050px]:py-[8px]  max-[875px]:px-5 max-[875px]:py-[7px]
            max-[875px]:text-[15px] rounded-full cursor-pointer hover:bg-[#fff4f2] transition-all duration-300"
          >
            Sign In
          </button>
        ) : (
          <div className="navbar-profile relative group ">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown absolute right-0   z-10 hidden group-hover:flex flex-col gap-[10px] bg-[#fff2ef] py-3 px-[25px] rounded-[4px] border border-[#ff6347] outline-2 outline-white">
              <li onClick={() => navigate("/myorders")} className="flex items-center gap-2 justify-center cursor-pointer hover:text-[#ff6347]">
                <img src={assets.bag_icon} alt="" className="w-[20px]"/>
                <p >Orders</p>
              </li>
              <hr />
              <li className="flex items-center justify-center gap-[10px] cursor-pointer  hover:text-[#ff6347]"
              onClick={logOut}>
                <img src={assets.logout_icon} alt=""  className="w-[20px]"/>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
