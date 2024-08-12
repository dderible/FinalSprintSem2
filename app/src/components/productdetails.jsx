import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";
import { useShoppingCart } from "./cartcontext";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useShoppingCart();

  useEffect(() => {
    const fetchedProduct = getProductById(Number(productId));
    setProduct(fetchedProduct);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="itemdescription">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product.id)}>Add To Cart</button>
    </div>
  );
};

export default ProductDetails;
