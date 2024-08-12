import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./components/cartcontext";
import ProductList from "./components/productlist";
import { Shoppingcart } from "./components/shoppingcart";
import { Navbar } from "./components/navbar";
import { Checkout } from "./components/checkout";
import { Navbar2 } from "./components/navbar2";
import ProductDetails from "./components/productdetails"; 

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/productdetails/:productId"
            element={<ProductDetails />}
          />{" "}
        <Route path="/cart" element={<Shoppingcart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Navbar2 />
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
