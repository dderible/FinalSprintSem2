import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../api.js';
import { ShoppingCartProvider } from './cartcontext';

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
            Add To Cart {setCartItems > 0 && <> ({setCartItems})</>}
          </button>
          </li>))}
        </ul>
      </div>
    )
}

export default ProductList