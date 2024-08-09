import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import '../index.css';

export const Navbar2 = () => {
    return ( 
        <div className="navbar">
            <div className="links">
                <div>
                    <Link to="/"> Newfoundland Electronics</Link>
                </div>
                <div>
                    <Link to="/"> Top of Page</Link>
                </div>
            </div>
        </div>
    );
};
