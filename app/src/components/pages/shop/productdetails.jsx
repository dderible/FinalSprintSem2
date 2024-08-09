import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../api';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { ShoppingCart } from 'phosphor-react';
import { getProducts } from '../../../api';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = ShoppingCart();

    useEffect(() => {
    setProduct(getProducts(Number(productId)));
}, [productId]);

if (!product) return <div>Loading...</div>;

return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
    );
};

export default ProductDetails;