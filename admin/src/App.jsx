import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/Sidebar/SideBar";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Order from "./Pages/Orders/Order";
import Footer from "./components/Footer/Footer"; 

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const url = "https://food-del-2026-backend.onrender.com";

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ToastContainer />

      {/* HEADER */}
      <NavBar />
      <hr />

      {/* CONTENT */}
      <div className="app-content" style={{ flex: 1 }}>
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;