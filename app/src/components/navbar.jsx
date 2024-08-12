import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title1">
        <h1>Newfoundland Electronics</h1>
      </div>
      <div className="links">
        <div className="shopbox">
          <Link to="/">Shop</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};
