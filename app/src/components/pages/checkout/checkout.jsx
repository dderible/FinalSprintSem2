import React from 'react'
import {Link} from 'react-router-dom';

export const Checkout = () => {
  return (
    <div className="checkoutbox">
        <div className="checkoutboxtext">
            <p className="textspacing">Thank You For Your Order, It Is Now Being Prepared to</p>
            <p className="textalign1">Be Shipped!</p>
            <p className="textalign2">You Will Receive A Email When Your Products Have Been</p>
            <p className="textalign3">Shipped</p>
            <p className="textalign4">Thank You For Chosing Newfoundland Electronics</p>
        </div>
        <div className="checkoutboxbutton">
            <Link to = "/">Back To Store</Link>
        </div>
    </div>
  )
}

export default Checkout
