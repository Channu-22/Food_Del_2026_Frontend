import React from "react";
import "./Order.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { IndianRupee, Package, User, Phone, MapPin } from "lucide-react";
import { assets } from "../../assets/assets.js";

function Order({ url }) {
  const [orders, setOrders] = useState([]);

  async function fetchAllOrders() {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  async function statusHandler(event, orderId) {
    console.log(event,orderId)
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add my-[50px] px-4 max-w-[1400px] mx-auto">
      <div className="mb-8">
        <h3 className="text-[32px] font-bold text-[#262626] mb-2">
          Order Page
        </h3>
        <p className="text-[#676767] text-[15px]">Manage all customer orders</p>
      </div>

      <div className="order-list flex flex-col gap-5">
        {orders.map((order, index) => {
          return (
            <div
              key={index}
              className="order-item bg-white hover:shadow-md transition-shadow duration-200 grid grid-cols-1 lg:grid-cols-[auto_2fr_auto_auto_auto] gap-4 lg:gap-6 items-start p-5 rounded-lg border border-[#e0e0e0]"
            >
              {/* Parcel Icon */}
              <div className="flex justify-start">
                <img
                  src={assets.parcel_icon}
                  alt="parcel"
                  className="w-12.5 h-12.5"
                />
              </div>

              {/* Order Details */}
              <div className="flex flex-col gap-2">
                {/* Order Items */}
                <p className="order-item-food text-[14px] text-[#454545] leading-relaxed font-medium">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return (
                        <span key={index}>
                          {item.name}{" "}
                          <span className="text-[#ff6347]">
                            × {item.quantity}
                          </span>
                        </span>
                      );
                    } else {
                      return (
                        <span key={index}>
                          {item.name}{" "}
                          <span className="text-[#ff6347]">
                            × {item.quantity}
                          </span>
                          ,{" "}
                        </span>
                      );
                    }
                  })}
                </p>

                {/* Customer Name */}
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#676767]" />
                  <p className="order-item-name text-[14px] text-[#262626] font-semibold">
                    {order.address.firstName + " " + order.address.lastName}
                  </p>
                </div>

                {/* Address */}
                <div className="order-item address flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#676767] mt-0.5 flex-shrink-0" />
                  <div className="text-[13px] text-[#676767] leading-relaxed">
                    <p>{order.address.street}</p>
                    <p>
                      {order.address.city +
                        ", " +
                        order.address.state +
                        ", " +
                        order.address.country +
                        ", " +
                        order.address.zipcode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#676767]" />
                  <p className="order-item-phone text-[13px] text-[#676767]">
                    {order.address.phone}
                  </p>
                </div>
              </div>

              {/* Items Count */}
              <div className="flex items-center gap-2 bg-[#f5f5f5] px-4 py-2 rounded-md h-fit">
                <Package className="w-4 h-4 text-[#676767]" />
                <p className="text-[14px] font-medium text-[#454545]">
                  {order.items.length}{" "}
                  {order.items.length === 1 ? "Item" : "Items"}
                </p>
              </div>

              {/* Amount */}
              <div className="flex items-center gap-1 bg-[#f0fdf4] px-4 py-2 rounded-md h-fit">
                <IndianRupee className="w-5 h-5 stroke-[1.5] text-[#16a34a]" />
                <p className="text-[16px] font-semibold text-[#16a34a]">
                  {order.amount}
                </p>
              </div>

              {/* Status Dropdown */}
              <select onChange={(e) => statusHandler(e,order._id)} value={order.status} className="px-4 py-3 rounded-md border border-[#e0e0e0] bg-[#ffe1e1] text-[#454545] text-[14px] font-medium cursor-pointer hover:border-[#ff6347] focus:outline-none focus:ring-2 focus:ring-[#ff6347] focus:ring-opacity-20 transition-all duration-200">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;
