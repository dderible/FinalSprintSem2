import React from 'react'
import {Link} from 'react-router-dom';


export const Shoppingcart = () => {
  return (
    <div className="cartBox">
      <div className="shopcartbutton1">
        <Link to="/">Continue Shopping</Link>
      </div>
      <div className="shopcartbutton2">
        <Link to="/checkout">Checkout</Link>
      </div>
      
    </div>
  )
}

export default Shoppingcart
