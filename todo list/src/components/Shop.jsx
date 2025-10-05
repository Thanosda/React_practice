import React, { useState } from "react";
import ProductItems from "./ProductItems";

const Shop = () => {
  let [product, setProduct] = useState({
    name: "mobile",
    price: 10000,
    Description: "2tb Storage",
  });
  return (
    <div>
      <h1>Welcome to my Shop</h1>
      <ProductItems product={product}/>
      {product.name} - {product.price} - {product.Description}
    </div>
  );
};

export default Shop;
