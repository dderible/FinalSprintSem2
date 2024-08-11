import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import '../index.css';

export const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="title1">
                <h1>Newfoundland Electronics</h1>
            </div>

            <div className="shopbox">
                <Link to="/"> Shop </Link>     
            </div>

            <div className="shopCart">
                <Link to="/cart"> 
                    <ShoppingCart size={32}/>
                </Link>
            </div>
                
        </div>

    );
};
