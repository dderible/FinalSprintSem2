import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';

import '../index.css';


export const Navbar = () => {
    return ( 
        <div className="navbar">
            
            <div className="titlelogo">
                <h1>Newfoundland Electronics</h1>
            </div>

            <div className="shopBtn">
                <button><Link to="/">SHOP</Link></button>
            </div>

            <div className="shopCartLogo">
                <Link to="/cart">
                    <ShoppingCart size={64}/>
                </Link>
            </div>

        </div>
    );
};
