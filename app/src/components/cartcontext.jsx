import React, { createContext, useState, useContext } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    return (
        <ShoppingCartContext.Provider 
            value={{ 
                cartItems, 
                addToCart, 
                removeFromCart 
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};