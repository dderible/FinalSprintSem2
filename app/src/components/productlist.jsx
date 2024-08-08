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
        <ul>
          {products.map((product) => ( <li key={product.id} className="productbox"> <img src={product.image} className="techimage" alt='item' /> <p>{product.name}</p> <br /> <p>{product.price}</p> <br />
          <div className='cartbutton'>
          <button type="submit">Add To Cart</button>
          </div> </li>))}
        </ul>
      </div>
    )
}

export default ProductList