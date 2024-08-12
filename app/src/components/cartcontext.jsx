// Example cartcontext.js
import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prevItems) => [...prevItems, itemId]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((id) => id !== itemId));
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
