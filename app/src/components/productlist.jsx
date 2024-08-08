import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../api.js';

function ProductList({
  
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => { const fetchedProducts = getProducts(); 
    setProducts(fetchedProducts); }, []);

    return (
      <div className='productlist'>
        <div className='productbox'>
        <ul>
          {products.map((product) => ( <li key={product.id}> <img src={product.image} className="techimage" alt='item' /> <p>{product.name}</p> <br /> <p>{product.price}</p></li>))}
        </ul>
        </div>
      </div>
    )
}

export default ProductList