import React, { createContext, useState, useContext } from 'react';

const ShoppingCart = createContext();

export const useShoppingCart = () => useContext(ShoppingCart);

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    return (
        <ShoppingCart.Provider 
            value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </ShoppingCart.Provider>
    );
};