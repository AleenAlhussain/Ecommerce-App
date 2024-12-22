import React, { useState ,useEffect} from "react";
import Products from "./Products";
import Blogs from "./Blogs";
import Footer from "./Footer";
import backgroundImage from "../assets/images/slider_1.jpg"
import "../Header.css"; // Import your CSS file
import "../responsive.css"; // Import your CSS file
function Home({ cart, setCart }) {
  // const [cart, setCart] = useState([]);
  return (
    <>
    <div
        className="main_slider"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Fix: Use `url()` syntax
          backgroundSize: "cover", // Optional: Ensure the image covers the area
          backgroundPosition: "center", // Optional: Center the image
          backgroundRepeat: "no-repeat", // Optional: Avoid repeating the image
        }}
      >
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>Spring / Summer Collection 2017</h6>
                <h1>Get up to 30% Off New Arrivals</h1>
                <div className="red_button shop_now_button">
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products cart={cart} setCart={setCart} />
      <Blogs />
      {/* 
    <Newsletter /> */}
    <Footer />
    </>
  );
}

export default Home;