import React from "react";
import { useShoppingCart } from "./cartcontext";
import { getProductById } from "../api";
import { Link } from "react-router-dom";

export const Shoppingcart = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  console.log("Cart Items in Shoppingcart:", cartItems); // For debugging

  const cartProductDetails = cartItems.map((itemId) => getProductById(itemId));

  return (
    <div className="cartbox">
      <h2>Your Cart Items:</h2>
      <ul>
        {cartProductDetails.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          cartProductDetails.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="endbutton">
        <section>
          <Link to="/">Continue Shopping</Link>
        </section>
      </div>
      <div className="endbutton">
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};
