import React, { useState, useContext, useEffect } from "react";
import "./search.css";
import SearchBar from "./SearchBar";
//import BookData from "./Data.json";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";

const Popover = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopover = () => {
    setIsVisible(true);
  };

  const hidePopover = () => {
    setIsVisible(false);
  };

  return (
    <div className="popover-container" onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      {children}
      {isVisible && <div className="popover">{content}</div>}
    </div>
  );
};

export const Search = () => {

  const { cartItems, addToCart, removeFromCart, resetToZero, updateCartItemCount} =
    useContext(ShopContext);

  const [selectedItemId, setSelectedItemId] = useState(null);

  const onItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className="Ap" style={{marginTop: "70px"}}>
      <SearchBar placeholder="Enter An Item Name..." data={PRODUCTS} onItemClick={onItemClick} />

      <div className="products">
        {selectedItemId !== null && PRODUCTS.map((menuItem) => {
          const { id, productName, price, productImage, productInfo } = menuItem;
          if (selectedItemId !== id) return null; // Hide items not matching the selected item ID
          return (
            <article key={id} className="product">
              <img src={productImage} />
              <div className="description">
                <p style={{fontWeight: "bold", fontSize: "16.5px"}}>
                  {productName}
                </p>
                <div>
            <Popover content={productInfo}>
              <button className="btn btn-secondary">view info</button>
            </Popover>
          </div>
                <p style={{fontWeight: "bold"}}>${price}</p>
              </div>

              <div className="countHandler">
          <button style={{borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px"}} onClick={() => removeFromCart(id)}> - </button>
          <input 
          type='number'
            id={`input_${id}`}
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + Add </button>
          <button style={{borderTopRightRadius: "15px", borderBottomRightRadius: "15px"}} onClick={() => resetToZero(id)}>
            X 
          </button>
        </div>

            </article>
          );
        })}
      </div>
    </div>
  );
}
