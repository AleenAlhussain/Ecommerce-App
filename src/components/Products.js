import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "../Header.css"; // Import your CSS file
import "../responsive.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

function Products({ cart, setCart }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState("all");
  const navigate = useNavigate();

  const handleButtonClick = (filterType) => {
    setActiveButton(filterType);
    if (filterType === "all") {
      setFilter(data);
    } else {
      setProduct(filterType);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    if (setCart) {
      // Check if setCart is passed correctly
      setCart((prevCart) => [...prevCart, product]);
    } else {
      console.error("setCart is not a function");
    }
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const setProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => (
    <>
      {[1, 2, 3, 4].map((_, idx) => (
        <div className="col-md-3" key={idx}>
          <Skeleton height={350} />
        </div>
      ))}
    </>
  );

  const ShowProducts = () => (
    <>
      <div className="row align-items-center">
        <div className="col text-center">
          <div className="new_arrivals_sorting">
            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
              <li
                className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                  activeButton === "all" ? "active" : ""
                }`}
                style={{
                  backgroundColor:
                    activeButton === "all" ? "#fe4c50" : "transparent",
                  color: activeButton === "all" ? "#fff" : "#000",
                }}
                onClick={() => handleButtonClick("all")}
              >
                All
              </li>
              <li
                className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                  activeButton === "women's clothing" ? "active" : ""
                }`}
                style={{
                  backgroundColor:
                    activeButton === "women's clothing"
                      ? "#fe4c50"
                      : "transparent",
                  color: activeButton === "women's clothing" ? "#fff" : "#000",
                }}
                onClick={() => handleButtonClick("women's clothing")}
              >
                Women's Clothing
              </li>
              <li
                className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                  activeButton === "jewelery" ? "active" : ""
                }`}
                style={{
                  backgroundColor:
                    activeButton === "jewelery" ? "#fe4c50" : "transparent",
                  color: activeButton === "jewelery" ? "#fff" : "#000",
                }}
                onClick={() => handleButtonClick("jewelery")}
              >
                Jewelery
              </li>
              <li
                className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                  activeButton === "men's clothing" ? "active" : ""
                }`}
                style={{
                  backgroundColor:
                    activeButton === "men's clothing"
                      ? "#fe4c50"
                      : "transparent",
                  color: activeButton === "men's clothing" ? "#fff" : "#000",
                }}
                onClick={() => handleButtonClick("men's clothing")}
              >
                Men's Clothing
              </li>
              <li
                className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                  activeButton === "electronics" ? "active" : ""
                }`}
                style={{
                  backgroundColor:
                    activeButton === "electronics" ? "#fe4c50" : "transparent",
                  color: activeButton === "electronics" ? "#fff" : "#000",
                }}
                onClick={() => handleButtonClick("electronics")}
              >
                Electronics
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {filter.map((product) => {
          // Check if the product is in the cart
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  className="card-img-top h-100"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}
                  </h5>
                  <p className="card-text lead fw-bold">RS.{product.price}</p>
                  <button
                    onClick={
                      () =>
                        isInCart
                          ? removeFromCart(product.id) // If in cart, remove
                          : addToCart(product) // If not in cart, add
                    }
                    className={` ${
                      isInCart ? "btn btn-danger" : "red_button shop_now_button"
                    }`}
                  >
                    {isInCart ? "Remove" : "Buy Now"}
                  </button>
                  <button
                    onClick={() => navigate(`/product_details/${product.id}`)}
                    className="btn red_button shop_now_button"
                  >
                    Show Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <div className="container my-5 py-5">
      <div class="row">
        <div class="col text-center">
          <div class="section_title new_arrivals_title">
            <h2>New Arrivals</h2>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
