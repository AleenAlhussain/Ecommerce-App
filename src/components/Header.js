import React from "react";
import "../Header.css"; // Import your CSS file
import "../responsive.css"; // Import your CSS file
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Header = ({ cart }) => {
  return (
    <header className="header trans_300">
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <a href="#">
                  <span>shop</span>
                </a>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li><Link to="/products">Shop</Link></li>
                  <li><a href="#">promotion</a></li>
                  <li><a href="#">pages</a></li>
                  <li><Link to="/blogs">Blogs</Link></li>
                  <li><Link to="/">Contact</Link></li>
                </ul>
                <ul className="navbar_user">
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    {/* <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a> */}
                    <Link to="/login" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user" aria-hidden="true"></i>
                                
                              </Link>
                  </li>
                  <li className="checkout">
                    
                     <Link to="/cart" className="btn  ms-2">
                     <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                     <span id="checkout_items" className="checkout_items">
                     {cart.length}
                      </span> 
                              </Link>
                  </li>
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
