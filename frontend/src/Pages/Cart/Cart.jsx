import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

import { IndianRupee } from "lucide-react";

function Cart() {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount,url, } =
    useContext(StoreContext);
  const gridCols = "grid-cols-[80px_2fr_1fr_1fr_1fr_60px]";
  const cartTotal = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart mt-[100px]">
      <div className="cart-items ">
        {/* <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_0.5fr_1fr] items-center text-pure-greys-300 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div> */}
        <div
          className={`grid ${gridCols} items-center text-gray-400 text-sm py-3 border-b`}
        >
          <p>Items</p>
          <p>Title</p>
          <p className="text-center">Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Total</p>
          <p className="text-center">Remove</p>
        </div>

        <br />
        <hr className="h-[1px] bg-[#e1e1e1] border-none" />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={item._id}
                className={`grid ${gridCols} items-center py-4 border-b text-black`}
              >
                {/* Image */}
               
                <img
                  src={url+"/images/"+item.image}
                  alt={item.name}
                  className="w-[50px] h-[50px] object-cover rounded"
                />

                {/* Title */}
                <p className="font-medium">{item.name}</p>

                {/* Price */}
                <p className="text-center flex items-center justify-center gap-1">
                  <IndianRupee className="w-4 h-4" />
                  {item.price}
                </p>

                {/* Quantity */}
                <p className="text-center">{cartItems[item._id]}</p>

                {/* Total */}
                <p className="text-center flex items-center justify-center gap-1">
                  <IndianRupee className="w-4 h-4" />
                  {item.price * cartItems[item._id]}
                </p>

                {/* Remove */}
                <p
                  onClick={() => removeFromCart(item._id)}
                  className="text-center cursor-pointer text-gray-600 hover:text-red-500 font-semibold"
                >
                  x
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom  mt-[100px] flex max-[800px]:flex-col-reverse justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex-1 flex flex-col gap-5">
           <h2 className="font-semibold text-[30px]">Cart totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              {/* <p>{getTotalCartAmount()}</p> */}
              <p className="text-center flex items-center justify-center">
                <IndianRupee className="w-4 h-4" />
                {getTotalCartAmount()}
              </p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              {/* <b>{getTotalCartAmount()+2}</b> */}
              {/* <p className="text-center flex items-center justify-center ">
                  <IndianRupee className="w-4 h-4" />
                  {getTotalCartAmount() < 0 ? 0 : getTotalCartAmount()+2}
                </p> */}
              <b className="text-center flex items-center justify-center">
                <IndianRupee className="w-4 h-4" />
                {cartTotal === 0 ? 0 : cartTotal + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order") }className="text-white bg-[#ff6347] w-[max(15vw,200px)] py-3 rounded-[4px] cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode flex-1 max-[800px]:justify-start">
          <div>
            <p className="text-pure-greys-300">
              If you have a promo code, Enter it here
            </p>
            <div className="cart-promocode-input mt-[10px] bg-[#eaeaea] flex justify-between items-center rounded">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent outline-none border-none  pl-[10px]"
              />
              <button className="w-[max(10vw,150px)] py-[10px] px-[5px] bg-black text-white rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
