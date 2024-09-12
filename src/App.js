import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { AnotherPage1 } from "./pages/cart/anotherPage1";
import { Search } from "./pages/color/search";
import { ShopContextProvider } from "./context/shop-context";

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);

  // const [colorSelectorKey, setColorSelectorKey] = useState(0);

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            {/* Redirect root path to /Chris.Dev's-Store */}
            {/* <Route path="/" element={<Navigate to="/Chris.Dev's-Store" />} /> */}
            <Route path="/Chris.Dev's-Store" element={<Home />} />
            <Route path="/shop" element={<Shop />} />            
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart onSubmit={handleSubmit} />} />
            <Route
              path="/anotherPage1"
              element={
                formSubmitted ? (
                  <AnotherPage1 />
                ) : (
                  <Navigate to="/cart" replace />
                )
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/anotherPage1" element={<AnotherPage1 onSubmit={handleSubmit} />} />  

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
