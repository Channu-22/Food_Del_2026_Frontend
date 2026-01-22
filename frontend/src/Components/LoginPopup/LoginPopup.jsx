import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

function LoginPopup({ setShowlogin }) {
  const [currentState, setCurrentState] = useState("Login");
  const { url, token, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function onChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  // useEffect(() => {
  //   console.log(data)

  // },[data])

 async function onLogin(e) {
  e.preventDefault();

  try {
    let newUrl = url;
    newUrl += currentState === "Login"
      ? "/api/user/login"
      : "/api/user/register";

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      setShowlogin(false);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
    console.error(error);
  }
}


  return (
    <div className="login-popup absolute z-[1] w-full h-full bg-[#000000e0] grid">
      <form
        onSubmit={onLogin}
        className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-lg text-[14px] animate-[fadeIn_5s]"
      >
        <div className="login-popup-title relative flex justify-center items-center text-black">
          <h2 className="font-bold text-3xl text-center">{currentState}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            className="w-4 cursor-pointer absolute top-[-10px] right-[-10px]"
            alt=""
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your name"
              required
              className="outline-none border border-[#c9c9c9] p-[10px] rounded-[4px]"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            required
            className="outline-none border border-[#c9c9c9] p-[10px] rounded-[4px]"
            onChange={onChangeHandler}
            name="email"
            value={data.email}
          />
          <input
            type="password"
            placeholder="password"
            required
            className="outline-none border border-[#c9c9c9] p-[10px] rounded-[4px]"
            onChange={onChangeHandler}
            name="password"
            value={data.password}
          />
        </div>

        <button
          type="submit"
          className="p-[10px] rounded-[4px] text-white bg-[#ff6347] text-[15px] cursor-pointer"
        >
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition flex items-start gap-2 mt-[-15px]">
          <input type="checkbox" className="mt-[5px]" required />
          <p className="text-[14px] font-lg">
            By continuing,I agree to the terms of use & privacy policy.{" "}
          </p>
        </div>

        {currentState === "Login" ? (
          <p className="">
            create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="text-[#ff6347] font-medium cursor-pointer"
            >
              Click here{" "}
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="text-[#ff6347] font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
