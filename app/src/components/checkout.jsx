import React from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <div className="checkoutbox">
      <div className="checkoutboxtext">
        <h2>
          Thank You For Your Order, It Is Now Being Prepared to Be Shipped! You
          will Receive an email once your order has been shipped Thank you for
          chooseing Newfoundland Electronics
        </h2>

        <div className="checkoutboxbutton">
          <button>
            <Link to="/">Back To Store</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
