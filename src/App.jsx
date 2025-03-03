import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navebar/Navbar";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Card from "./pages/Card/Card";
import OrderPlace from "./pages/OrderPlace/OrderPlace";
import Footer from "./components/Footers/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/orderPlce" element={<OrderPlace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
