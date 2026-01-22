import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div>
      <p className="app-download m-auto mt-[100px] text-[max(3vw,20px)] font-medium text-center" id="app-download">For Better Experince Download<br />Tomato App </p>
      <div className="app-download-platform flex items-center justify-center mt-[40px] gap-[max(2vw,20px)]">
        <img src={assets.play_store} alt="play store" className="w-[max(30vw,120px)] max-w-[180px] transition-transform duration-300 hover:scale-105 cursor-pointer"/>
        <img src={assets.app_store} alt="app store" className=" w-[max(30vw,120px)] max-w-[180px] transition-transform duration-300 hover:scale-105 cursor-pointer"/>
      </div>
    </div>
  )
}

export default AppDownload