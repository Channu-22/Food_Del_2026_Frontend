import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);
// import { food_list } from "../assets/assets";

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFood_list] = useState([]);

  //add to cart function
  async function addToCart(itemId) {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
    if(token){
      const response = await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
      // console.log(response)
    }
  }

  //remove from cart function
  async function removeFromCart(itemId) {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));

    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}}) 
    }
  }

  async function loadCartData(token) {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    // console.log("get:",response);
    setCartItems(response.data.cart);


  }

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  async function fetchFoodList() {
    const response = await axios.get(url +"/api/food/list");
    // console.log(response);
    setFood_list(response.data.data);
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    // console.log("food: ",food_list)

    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
