import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/Sidebar/SideBar";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Order from "./Pages/Orders/Order";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer />
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/order" element={<Order url={url}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
