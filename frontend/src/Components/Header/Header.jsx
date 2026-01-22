import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className="header relative h-[34vw]  my-[30px] mx-auto bg-[url('./header_img.png')] bg-no-repeat bg-contain">
        <div className="header-content absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] max-[1050px]:w-[45%] bottom-[10%] left-[6vw] animate-[fadeIn_5s]">
            <h2 className="font-medium text-white text-[max(4.5vw,22px)]">
              Order your favourite food here
            </h2>
            <p className="text-white text-[20px] max-[1050px]:text-[25px] max-[800px]:hidden">
              Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <button className="border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] max-[800px]:py-[2vw] max-[800px]:px-[4vw] bg-white text-[max(1vw,13px)] rounded-[50px] cursor-pointer hover:scale-105 transition-transform">
              View Menu
            </button>
        </div>
    </div>
  )
}

export default Header