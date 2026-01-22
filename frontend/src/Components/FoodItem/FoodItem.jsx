import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { IndianRupee } from "lucide-react";
import { StoreContext } from "../../Context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
//   const [itemCount, setItemCount] = useState(0);
  const{cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
   


  return (
    <div className="food-item w-full mx-auto rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.08)] transition-all duration-300 animate-fadeIn">
      <div className="food-item-img-container relative">
        <img src={url+"/images/"+image} alt="" className=" w-full  rounded-t-[15px]" />
        {!cartItems[id] ? (
          <img src={assets.add_icon_white} alt="" onClick={() => addToCart(id) } className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full hover:scale-110 transition-transform"/>
        ) : (
          <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] bg-white rounded-[50px] p-[6px] shadow-lg"> 
            <img src={assets.remove_icon_red} alt=""  onClick={() => removeFromCart(id)} className="w-[30px] hover:scale-110 transition-transform cursor-pointer"/>
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} className="w-[30px] hover:scale-110 transition-transform cursor-pointer"/>
          </div>
        )}
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex items-center justify-between mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="food-item-desc text-[#676767] text-sm">
          {description}
        </p>
        {/* <div className="flex items-center gap-1 text-[22px] font-medium text-[#ff6347]">
          <IndianRupee className="w-5 h-5 stroke-[1.5]" />
          <span>{price}</span>
        </div> */}
        <div className="food-item-price flex items-center gap-1 text-[22px] font-semibold text-[#ff6347]">
          <IndianRupee className="w-5 h-5 stroke-[2.5]" />
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
