import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Success from "./Components/Success";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/thank-you" element={<Success />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;