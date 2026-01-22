import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { IndianRupee } from "lucide-react";
import { StoreContext } from "../../Context/StoreContext";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  // const gridCols = "grid-cols-[80px_2fr_1fr_1fr_1fr_60px]";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const cartTotal = getTotalCartAmount();
  const placeOrder = async (e) => {
    e.preventDefault();

    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    // console.log("orderItems: ",orderItems);
    let orderData = {
      address: data,
      items: orderItems,
      amount: cartTotal + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    if (!token || cartTotal === 0) {
      navigate("/cart");
    }
  }, [token, cartTotal]);

  return (
    <form
      onSubmit={placeOrder}
      action=""
      className="place-order  flex items-start justify-between gap-[50px]"
    >
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="title text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-field flex gap-[10px]">
          <input
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First name"
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
            required
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            required
            placeholder="last name"
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
          />
        </div>
        <input
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          required
          placeholder="Email address"
          className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
        />
        <input
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          required
          placeholder="Street"
          className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
        />
        <div className="multi-field flex gap-[10px]">
          <input
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            required
            placeholder="City"
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
          />
          <input
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            required
            placeholder="State"
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
          />
        </div>
        <div className="multi-field flex gap-[10px]">
          <input
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            required
            placeholder="Zip code"
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
          />
          <input
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            required
            placeholder="Country"
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
          />
        </div>
        <input
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          required
          placeholder="Phone"
          className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"
        />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
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
          <button
            type="submit"
            className="text-white bg-[#ff6347] w-[max(15vw,200px)] py-3 rounded-[4px] cursor-pointer mt-8"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
