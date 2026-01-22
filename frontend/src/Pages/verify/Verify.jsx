// import React from "react";
// import "./Verify.css";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useContext } from "react";
// import { StoreContext } from "../../Context/StoreContext";
// import axios from "axios";
// import { useEffect } from "react";

// function Verify() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");
//   const navigate = useNavigate();

//   const { url } = useContext(StoreContext);

//   async function verifyPayment() {
//     const response = await axios.post(url + "/api/order/verify", {
//       success,
//       orderId,
//     });
//     if (response.data.success) {
//       navigate("/myOrders");
//     } else {
//       navigate("/");
//     }
//   }

//   useEffect(() => {
//     verifyPayment();

//   },[])

//   console.log(success, orderId);
//   return (
//     <div className="verify">
//       <div className="spinner"></div>
//     </div>
//   );
// }

// export default Verify;
import React, { useEffect, useContext } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

function Verify() {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();
  const { url } = useContext(StoreContext);

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });

      if (response.data.success) {
        navigate("/myOrders");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Payment verification failed", err);
      navigate("/");
    }
  };

  useEffect(() => {
    if (success && orderId) {
      verifyPayment();
    } else {
      navigate("/");
    }
  }, [success, orderId]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
}

export default Verify;
