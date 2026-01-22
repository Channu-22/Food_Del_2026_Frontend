import React, { Children } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutLet from "./Components/OutLet";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import StoreContextProvider from "./Context/StoreContext.jsx";
import Verify from "./Pages/verify/Verify.jsx";
import MyOrders from "./Pages/MyOrders/MyOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutLet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
      {
        path:"/verify",
        element:<Verify/>
      },
      {
        path:"/myorders",
        element:<MyOrders/>
      },
    ],
  },
]);

function Router() {
  return (
    <StoreContextProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </StoreContextProvider>
  );
}

export default Router;
