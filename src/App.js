import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import CartPage from "./components/CartProduct";
import Login from "./components/LoginPage";
import Blogs from "./components/Blogs";
import Checkout from "./components/Checkout";
import ProductDetails from "./components/ProductDetails";
import Register from "./components/RegistrPage";
import "./Header.css"; // Import your CSS file
import "./responsive.css"; // Import your CSS file
function App() {
  const [cart, setCart] = useState([]); // Initialize cart state
  const [products, setProducts] = useState([]); // Initialize products state

  // Fetch products (example API call)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Router>
      <Header cart={cart} /> {/* Pass cart to Navbar */}
      <Routes>
      <Route path="/blogs" element={<Blogs  />} />
      <Route path="/checkout" element={<Checkout  />} />
      <Route path="/product_details/:id" element={<ProductDetails products={products} setCart={setCart} />} />



      <Route path="/login" element={<Login  />} />
      <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} /> {/* Pass cart and setCart to Home */}
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} /> {/* CartPage Route */}

      </Routes>
    </Router>
  );
}

export default App;
