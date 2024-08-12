import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import { useShoppingCart } from "./cartcontext";
import { Link } from "react-router-dom";

function ProductList() {
  const { addToCart, cartItemAmount } = useShoppingCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = getProducts();
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="productlist">
      {products.map((product) => (
        <div key={product.id} className="productbox">
          <img src={product.image} className="techimage" alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <Link to={`/productdetails/${product.id}`}>Product Details</Link>
          <button className="cartbutton" onClick={() => addToCart(product.id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
