import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../src/context/shop-context";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, MagnifyingGlass } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const { cartItems } = useContext(ShopContext);
  const totalItemsCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  // State to manage the collapse of the navbar
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to check if the route matches the current path
  const isActive = (path) => location.pathname === path;

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Navbar */}
          <nav id="nav" className="navbar navbar-light navbar-expand-md bg-dark py-3 fixed-top">
            <div className="container">
              <p className="navbar-brand p-0 m-0" id="store-logo">CHRIS.DEV'S STORE</p>

              {/* Cart icon next to the toggler button */}
              <div className="d-flex align-items-center">
                {/* Cart Icon for smaller screens */}
                <span className="d-md-none">
                  <Link className="nav-link cart-icon" to="/cart" onClick={closeNavbar}>
                    <ShoppingCart size={24} color="#6e6c6c" />
                    {totalItemsCount > 0 && <span style={{color: "#8ac7b5", fontSize: "15px"}}>{totalItemsCount}</span>}
                  </Link>
                </span>
                <span className="d-md-none ps-1" >
                  <Link className="nav-link cart-icon" to="/search" onClick={closeNavbar}>
                    <MagnifyingGlass size={24} color="#6e6c6c" />
                  </Link>
                </span>

                {/* Toggler button */}                
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                  <span className="navbar-toggler-icon"/>
                </button>
              </div>

              <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`} id="navmenu">
                <ul className="navbar-nav ms-auto">
                  <li>
                    <div className={`nav-item ${isActive("/Chris.Dev's-Store") ? "active" : ""}`}>
                      <Link to="/Chris.Dev's-Store" className="nav-link" onClick={closeNavbar}> HOME </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`nav-item ${isActive("/shop") ? "active" : ""}`}>
                      <Link to="/shop" className="nav-link" onClick={closeNavbar}> SHOP </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`nav-item ${isActive("/search") ? "active" : ""}`}>
                      <Link to="/search" className="nav-link" onClick={closeNavbar}> SEARCH </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
                      <Link to="/contact" className="nav-link" onClick={closeNavbar}> CONTACT </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`nav-item ${isActive("/cart") ? "active" : ""}`}>
                      <Link className="nav-link" to="/cart" onClick={closeNavbar} style={{paddingRight: "0"}}>
                        <ShoppingCart size={32} />
                        {totalItemsCount > 0 && <span style={{color: "#8ac7b5", fontSize: "17px"}}>{totalItemsCount}</span>}
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Navbar end  */}
        </div>
      </header>
    </div>
  );
};
