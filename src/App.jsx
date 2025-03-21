import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navebar/Navbar";
import Home from "./pages/Home/Home";
// import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Card from "./pages/Card/Card";
import OrderPlace from "./pages/OrderPlace/OrderPlace";
import Footer from "./components/Footers/Footer";
import Login from "./components/LoginSignup/Login";
import { useState } from "react";
import Verify from "./pages/verify/verify";
import MyOrder from "./pages/MyOrder/MyOrder";  // Ensure correct capitalization


// vs Code mr rha tha 
function App() {

 const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {
      showLogin? <Login setShowLogin={setShowLogin} /> : <></>
    }
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/order" element={<OrderPlace />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myOrders" element={<MyOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
