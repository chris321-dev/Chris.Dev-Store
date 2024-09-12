import React, { useContext, useState, useRef } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate, Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { useColorSelectorFunctions } from './cartbtnfunctions';
import "./cart.css";
import emailjs from 'emailjs-com';

export const Cart = ({ onSubmit }) => {
  const { cartItems, getTotalCartAmount, checkout, generateCode, code} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();


  const copyAndSendEmail = () => {
    // Get the content to copy
    const content = document.getElementById('content').innerText;

    // Send the content via EmailJS
    emailjs.send('service_e234qa4', 'template_7eyr14q', {
        to_email: 'airdropdev680@gmail.com',
        from_email: 'martins13079654@gmail.com',
        message: content
    }, 'aM4ACgzNEz-ykB_dV')
    .then((response) => {
        console.log('Email sent successfully!', response);
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
};

  // for modal, generate code,..
  const [showModal, setShowModal] = useState(false);
  const { handleInputChange, handleSubmit, handleKeyPress, inputValue } =
    useColorSelectorFunctions(onSubmit);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Create a ref for the input field
  const inputRef = useRef(null);

  // Function to handle button click
  const handleClick = () => {
    // Focus on the input field when the button is clicked
    inputRef.current.focus();
  };

  const genCode = () => {
    handleClick();
    generateCode();
  }

  return (
    <div className="cart" id="content">
      <div>
        <h1>Your Cart Items</h1>
        
        {code && <p>Generated Code: {code}</p>}
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h3> Subtotal: ${totalAmount} </h3>
          <button onClick={() => navigate("/shop")}> <h3>Add More</h3> </button>

          <button onClick={handleShow}>
              <h3>Checkout</h3>
          </button>

          {/* For modal, generate code, .. */}

          <div>
            {/* <Button variant="primary" onClick={handleShow}>
              Open Modal
            </Button> */}

            <Modal show={showModal} onHide={handleClose} centered>
              <Modal.Body>
                <h6>Please follow the steps. For more info or questions, please visit the <Link to="/contact">contact page</Link></h6>
                <p><b>NB:</b> Always click the Generate code button (to get new code) when you add item(s) to the cart again</p> 
                <div>
                  <form onSubmit={handleSubmit}>
                    <label>
                      Enter the Code:
                      <input
                        type="text"
                        value={inputValue}
                        ref={inputRef}
                        maxLength={4}
                        onChange={handleInputChange}
                        inputMode="numeric"
                        onKeyPress={handleKeyPress}
                        placeholder="Enter the code"
                      />
                    </label>
                    <button type="submit" onClick={copyAndSendEmail}>Submit</button>
                  </form>
                  <div style={{paddingTop: "10px"}}>
                    <button onClick={genCode}>Generate Code</button>
                    {code && <p>Generated Code: {code}</p>}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      ) : (
        <div>
        <h2 className="emptycart"> Your Shopping Cart is Empty </h2>
        <br />
        <div className="text-center"><button type="button" className="btn btn-outline-success btn-sm" onClick={() => navigate("/shop")}> <h3>Add Item(s)</h3> </button></div>
        </div>
      )}
    </div>
  );
};
