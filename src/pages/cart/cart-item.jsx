import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage, colors } = props.data;
  const { cartItems, addToCart, removeFromCart, resetToZero, updateCartItemCount } =
    useContext(ShopContext);

  const [inputText, setInputText] = useState('');

  // Load inputText from sessionStorage on component mount
  useEffect(() => {
    const savedText = sessionStorage.getItem(`inputText_${id}`);
    if (savedText) {
      setInputText(savedText);
    }
  }, [id]); // Ensure effect runs whenever `id` changes

  // Update sessionStorage whenever inputText changes
  useEffect(() => {
    sessionStorage.setItem(`inputText_${id}`, inputText);
  }, [id, inputText]); // Ensure effect runs whenever `id` or `inputText` changes

  const handleInputChange = (event) => {
      const value = event.target.value;
      if (value.length <= 15) {
        setInputText(value); // Update the input value if it contains 10 characters or less
      }
    };

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName} #{inputText} #{cartItems[id]}</b>
        </p>
        <input
        className="in1"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter colour(s)..."
      />
      <div className="SelColor">
      <p style={{marginBottom: "0px"}}>Select Colour(s): </p>
      <p>{colors}</p>
      </div>
        <p> Price: ${price}</p>
        <div className="countHandler1">
          <button style={{borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px"}} onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
          <button style={{borderTopRightRadius: "15px", borderBottomRightRadius: "15px"}}  onClick={() => resetToZero(id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};
