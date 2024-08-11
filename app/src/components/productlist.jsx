import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../api.js';
import { useShoppingCart } from './cartcontext.jsx';

function ProductList({
  
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => { const fetchedProducts = getProducts(); 
    setProducts(fetchedProducts); }, []);

    return (
      <div className='productlist'>
        <ul>
          {products.map((product) => ( <li key={product.id} className="productbox"> <img src={product.image} className="techimage" alt='item' /> <p>{product.name}</p> <br /> <p>{product.price}</p> <br />
          <button className='cartbutton' onClick={() => addToCart(product.id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          </button>
          </li>))}
        </ul>
      </div>
    )
}

export default ProductList