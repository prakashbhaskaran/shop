import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../utils/ScrollTop";

import Cart from "./Cart";
import Home from "./Home";

import Product from "./Product";
import Products from "./Products";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
