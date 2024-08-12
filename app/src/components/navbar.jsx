import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">

      <div className="logo">
        <h1>Newfoundland Electronics</h1>
      </div>

      <div className="shopButton">
        <button>
        <Link to="/">SHOP</Link>
        </button>
      </div>

      <div className="cartLogo">
        <Link to="/cart">
          <ShoppingCart size={64}/>
        </Link>
        </div>
    </div>
  );
};
