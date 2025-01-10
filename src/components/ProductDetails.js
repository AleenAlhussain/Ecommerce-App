import React from "react";
import { useParams } from "react-router-dom";
import "../Header.css"; // Import your CSS file
import "../responsive.css"; // Import your CSS file
const ProductDetails = ({ products ,setCart}) => {
  const { id } = useParams();

  // Find the specific product using the id
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }
  const addToCart = (product) => {
    if (setCart) {  // Check if setCart is passed correctly
      setCart((prevCart) => [...prevCart, product]);
    } else {
      console.error("setCart is not a function");
    }
  };
  return (
    <div className="container mt-5">
        <div className="row">
        <div className="product-details mt-5 d-flex align-items-start mt-5">
    {/* Product Image */}
    <div className="product-image me-4">
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid w-50"
        style={{  objectFit: "cover" }}
      />
    </div>
  
    {/* Product Details */}
    <div className="product-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className="lead fw-bold">Price: RS.{product.price}</p>
      <button className="red_button shop_now_button" onClick={() => addToCart(product)} >Add to Cart</button>
    </div>
  </div>
        </div>

        
    </div>
  
  );
};

export default ProductDetails;
