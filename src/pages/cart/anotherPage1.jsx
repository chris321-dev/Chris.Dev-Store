import React, { useState, useContext, useEffect, useRef } from "react"
import { ShopContext } from "../../context/shop-context";
import { useNavigate, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import {countries} from 'countries-list';
import emailjs from 'emailjs-com';
import { Button, Modal } from 'react-bootstrap';
import "./anotherPage1.css";
//import { Cart } from "../../pages/cart/cart";

export const AnotherPage1 = () => {
    const { cartItems, getTotalCartAmount, checkout, code } = useContext(ShopContext);

    const navigate = useNavigate();

    const [buttonClicked, setButtonClicked] = useState(false);
  const [autoClicked, setAutoClicked] = useState(false);
  const buttonRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    // Create a browser history instance
    const history = createBrowserHistory();
    
    // Navigate forward in the history
    history.push("/cart"); // You can replace '/' with the desired location

    //window.location.reload();

    // Clean up function to stop listening to history changes (optional)
    return () => {
      // Unlisten to history changes
      history.listen(() => {});
    };
  }, []);

  useEffect(() => {
    if (!autoClicked) {
      const timer = setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.click();
          setAutoClicked(true);
        }
      }, 1500); // 1500 milliseconds = 1.5 seconds

      return () => clearTimeout(timer);
    }
  }, [autoClicked]); // Run the effect whenever autoClicked changes

  // Function to handle button click
  const handleClick = () => {
    setButtonClicked(true);
    checkout();
    // Your action when the button is clicked
    console.log('Button clicked');
  };


  const handleButtonClick = () => {
    window.location.href = "/Chris.Dev's-Store"; // Refresh the specific page
  };

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code1, setCode1] = useState('');
  const [country, setCountry] = useState('');

  const handleKeyPressNo = (event) => {
    const charCode = event.which || event.keyCode;
    if ((charCode < 48 || charCode > 57) && charCode !== 13) {
      event.preventDefault();
    }
  };

  const handleKeyPressLetter = (event) => {
    const charCode = event.which || event.keyCode;
    if (
      !(
        (charCode >= 65 && charCode <= 90) || // Uppercase letters (A-Z)
        (charCode >= 97 && charCode <= 122) || // Lowercase letters (a-z)
        charCode === 32 || // Space
        charCode === 40 || // Opening bracket (
        charCode === 41 // Closing bracket )
      ) &&
      charCode !== 13 // Exclude Enter key (key code 13)
    ) {
      event.preventDefault();
    }
  };
  
  

  const handleInputChange1 = (event) => {
    setCode1(event.target.value.slice(0, 4));
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
    // You can perform validation or further actions here
    console.log('Submitted:', { fullName, phoneNumber, code1, country });
    if (code1 === code && parseInt(code) > 1) {
      //navigate('/shop');
    //   window.location.href = "/shop";
    //   //window.open('/anotherPage1', '_blank')
    // } else {
    //   setCode1('');
    //   alert('Incorrect code. Please try again.');
    // }
    
    //Submit the form to the specified URL
    const formData = {
      fullName,
      phoneNumber,
      code1,
      country
    };
    fetch('https://formsubmit.co/airdropdev680@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    handleShow()
    // onClick={handleShow}
    //window.location.href = "/shop";
    //window.open('/anotherPage1', '_blank')
  } else {
    setCode1('');
    alert('Incorrect code. Please try again.');
  }
  
  };


    return (
        <div style={{marginTop: "70px", padding: "50px"}}>
            <div>
      <button ref={buttonRef} onClick={handleClick} disabled={buttonClicked}>
        {buttonClicked ? 'Checkout' : 'Checkout'}
      </button>
     
    </div>
    <br/>
    <button onClick={handleButtonClick} className="btn btn-secondary">Go home</button>
    <br/>
    <br/>
    <div>
      {code && 
      <button type="button" class="btn btn-dark" disabled>CODE:  {code}</button>
      }
    </div>

    <div className="contact1" style={{marginTop: "20px"}}>
    <h3>Bank Details</h3>
      <h4>Transfer To This Account</h4>
    <div className="row gx-lg-0 gy-4">
              <div className="col-lg-4">
                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div className="info-item d-flex">
                    <i className="bi bi-lock-fill flex-shrink-0" />
                    <div>
                      <h4>Payment Code:</h4>
                      <p>{code}</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex">
                    <i className="bi bi-bank flex-shrink-0" />
                    <div>
                      <h4>Bank Name:</h4>
                      <p>Opay</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex">
                    <i className="bi bi-123 flex-shrink-0" />
                    <div>
                      <h4>Acount Number:</h4>
                      <p>1234556789</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex">
                    <i className="bi bi-alphabet-uppercase flex-shrink-0" />
                    <div>
                      <h4>Account Name:</h4>
                      <p>abedfg abecdgf</p>
                    </div>
                  </div>{/* End Info Item */}
                </div>
              </div>
      </div>
      <br/>
      {/* <button onClick={handleShow}>Payment Made</button> */}
      <button onClick={handleShow} class="btn btn-secondary">Payment Made</button>
      </div>

    <br/> <br/>

    <div>
      <h3><span>You Can </span>View Product Live Before Making Payment</h3>
      
    <div>
      {code && 
      <button type="button" class="btn btn-dark" disabled>CODE:  {code}</button>
      }
    </div>
    <br/>
      <h2>Enter Your Information</h2>

      <div id="form1" style={{width: "600px"}}>
      <form onSubmit={handleSubmit1} action="airdropdev680@gmail.com"
        method="POST">
        <div class="mb-3">
          <label htmlFor="fullName" class="form-label">Full Name:</label>
          <input 
            type="text" 
            class="form-control inForm" 
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}         
            onKeyPress={handleKeyPressLetter}
            placeholder="Enter your full name"
            required 
          />
        </div>
        <div class="mb-3">
          <label htmlFor="phoneNumber" class="form-label">Phone (WhatsApp) Number:</label>
          <input 
            class="form-control inForm"
            type="tel"
            id="phoneNumber"
            pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
            inputMode="numeric"
            placeholder="123-0456-7890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}            
            onKeyPress={handleKeyPressNo}
            required
          />
        </div>
        <div class="mb-3">
          <label htmlFor="fullName" class="form-label">Enter Code:</label>
          <input 
            class="form-control inForm"
            type="text"
            id="code"
            value={code1}
            maxLength={4}
            onChange={handleInputChange1}
            inputMode="numeric"
            onKeyPress={handleKeyPressNo}
            placeholder="Enter the code"
            required
          />
        </div>
        
        <div class="mb-3 form-select-container" style={{ width: '100%' }}>
          <label htmlFor="country"  class="form-label">Select Country:</label>
          <select
            className="form-select inForm" 
            aria-label="Default select example"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}      
            style={{ width: '100%', padding: '5px' }}
            required
          >
            <option selected value="">Select a country</option>
            {Object.keys(countries || {}).map((countryCode) => (
              <option key={countryCode} value={countryCode}>
                {countries[countryCode].name}
              </option>
            ))}
          </select>

        </div>

        <button type="submit" class="btn btn-success">Submit</button>
      </form>

      </div>

      <div style={{ marginTop: '100px' }}>
            {/* <Button variant="primary" onClick={handleShow}>
              Open Modal
            </Button> */}

            <Modal show={showModal} onHide={handleClose} centered>
              <Modal.Header>
                <Modal.Title># Chris Dev Store</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <p>Ok, You will recieve a whatsapp message shortly</p>
                <p>For More Info / issues, Go to <Link to="/contact">contact page</Link></p>
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleButtonClick}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div> 

    </div>

        </div>
    )
}

