import React from 'react'
import "./NavBar.css"
import {assets} from "../../assets/assets.js"
function NavBar() {
  return (
    <div className="navbar flex items-center justify-between py-1 px-[4%]">
        <img className="logo w-[max(10%,80px)]" src={assets.logo} alt="" />
        <img className="profileImage w-[40px]" src={assets.profile_image} alt="" />
    </div>
  )
}

export default NavBar