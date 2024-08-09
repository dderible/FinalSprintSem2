import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import '../index.css';

export const Navbar2 = () => {
    return ( 
        <div className="navbar">
            <div className="links">
                <div className="title3">
                    <Link to="/"> Newfoundland Electronics</Link>
                </div>
                <div className="title4">
                    <a href="#top">Top of Page</a>
                </div>
            </div>  
        </div>
    );
};
