import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

// tomato-text-[#ff6347]
// text-#49557e
// bg-#fff4f2

function ExploreMenu( {category, setCategory}) {
  return (
    <div className="explore-menu  flex flex-col gap-5 " id="explore-menu">
      <h1 className="text-[#262626] text-3xl font-medium ">Explore our menu</h1>
      <p className="explore-menu-text max-w-[60%] max-[1050px]:max-w-full max-[1050px]:text-[14px]  text-[#808080]">Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p> 
      <div className="explore-menu-list  flex gap-5  justify-between items-center text-center my-5 overflow-x-scroll">
        {
          menu_list.map((item,index) => {
            return <div key={index} className="explore-menu-list-item" onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
              <img src={item.menu_image} alt=""  className={`${category === item.menu_name ? "border-[4px] border-[#ff6347]" : " "}   w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all duration-300`}/>
              <p className="my-[10px]  text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>

            </div>
          })
        }
      </div>
      <hr className="my-[10px] h-1 bg-[#e2e2e2] border-none"/>

    </div>
  )
}

export default ExploreMenu
