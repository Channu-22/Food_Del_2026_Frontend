import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { IndianRupee, Package } from "lucide-react";
import { assets } from "../../assets/assets";

function MyOrders() {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  async function fetchOrders() {
    try {
      const response = await axios.post(
        url + "/api/order/userOrders",
        {},
        { headers: { token } }
      );

      setData(response.data.data);
      console.log("Orders:", response.data.data);
    } catch (err) {
      console.log("Fetch orders error:", err);
    }
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="myorders my-[50px] px-4 max-w-[1400px] mx-auto">
      <div className="mb-8">
        <h2 className="text-[32px] font-bold text-[#262626] mb-2">My Orders</h2>
        <p className="text-[#676767] text-[15px]">Track and manage your food orders</p>
      </div>

      <div className="container flex flex-col gap-5">
        {data.map((order) => {
          return (
            <div
              className="my-orders-order bg-white hover:shadow-md transition-shadow duration-200 grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 md:gap-6 items-center p-5 rounded-lg border border-[#e0e0e0]"
              key={order._id}
            >
              {/* Parcel Icon */}
              <div className="flex justify-start">
                <img 
                  src={assets.parcel_icon} 
                  alt="parcel" 
                  className="w-[50px] h-[50px]" 
                />
              </div>

              {/* Order Items */}
              <div>
                <p className="text-[14px] text-[#454545] leading-relaxed">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return (
                        <span key={index}>
                          {item.name} <span className="text-[#454545] font-medium">× {item.quantity}</span>
                        </span>
                      );
                    } else {
                      return (
                        <span key={index}>
                          {item.name} <span className="text-[#454545] font-medium">× {item.quantity}</span>,{" "}
                        </span>
                      );
                    }
                  })}
                </p>
              </div>

              {/* Amount */}
              <div className="flex items-center gap-1 bg-[#f0fdf4] px-4 py-2 rounded-md">
                <IndianRupee className="w-5 h-5 stroke-[2] text-[#16a34a]" />
                <p className="text-[16px] font-semibold text-[#16a34a]">{order.amount}</p>
              </div>

              {/* Items Count */}
              <div className="flex items-center gap-2 bg-[#f5f5f5] px-4 py-2 rounded-md">
                <Package className="w-4 h-4 text-[#676767]" />
                <p className="text-[14px] font-medium text-[#454545]">
                  {order.items.length} {order.items.length === 1 ? "Item" : "Items"}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <span className={`text-xl text-[#ff6347]`}>●</span>
                <p className={`font-medium text-[14px] text-[#454545] `}>
                  {order.status}
                </p>
              </div>

              {/* Track Button */}
              <button 
                onClick={fetchOrders()}
                className="bg-[#ffe1e1] text-[#454545] font-medium text-[14px] py-3 px-6 rounded-md transition-colors duration-200"
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;