import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../api.js';

const [products, setProducts] = useState([]);

useEffect(() => { const fetchedProducts = getProducts(); 
  setProducts(fetchedProducts); }, []);

export const productList = () => {
  return (
    <div className='productlist'>
      <ul>
        {products.map((product) => ( <li key={product.id}> <img src={product.image} alt='item' /> <p>{product.name}</p></li>))}
      </ul>
    </div>
  )
}