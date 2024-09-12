// Website.js
import React, { useState, useContext, useEffect } from 'react';
import { getCategories } from './categories'; // Import getCategories function from categories.js
import { getSubcategories } from "./categories";
import { PRODUCTS } from "../../products";
import "./shop.css"; 
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { Popover } from 'antd'; // If you're using Ant Design for Popover


const Popover = ({ content, children }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const showPopover = () => {
      setIsVisible(true);
    };
  
    const hidePopover = () => {
      setIsVisible(false);
    };
  
    return (
      <div className="popover-container1" onMouseEnter={showPopover} onMouseLeave={hidePopover}>
        {children}
        {isVisible && <div className="popover1">{content}</div>}
      </div>
    );
  };

export const Shop = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (replace this with your actual loading logic)
    }, 1000);

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const backToTopButton = document.querySelector('.back-to-top');

    const scrollHandler = () => {
      if (window.scrollY > 100) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
    const { cartItems, addToCart, removeFromCart, resetToZero, updateCartItemCount} =
    useContext(ShopContext);
    
  
  const [selectedCategory, setSelectedCategory] = useState('All'); // Initialize with 'All'
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [focusedButton, setFocusedButton] = useState(null);
  const [shuffledItems, setShuffledItems] = useState([...PRODUCTS]); // Initialize with unshuffled items

  useEffect(() => {
    if (selectedCategory === 'All') {
      // Shuffle the items only when "All" category is selected
      const shuffled = [...PRODUCTS].sort(() => Math.random() - 0.5);
      setShuffledItems(shuffled);
    } else {
      // Filter items based on selected category
      const filtered = PRODUCTS.filter(item => item.cat === selectedCategory);
      setShuffledItems(filtered);
    }
  }, [selectedCategory]); // Trigger shuffling only when selectedCategory changes

  const handleCategorySelect = (cat) => {
    setSelectedCategory(selectedCategory === cat ? 'All' : cat);
    setSelectedSubcategory(null);
  };
  
  const handleSubcategorySelect = (subcat) => {
    setSelectedSubcategory(selectedSubcategory === subcat ? null : subcat);
  };
  

  let filteredItems = shuffledItems;

  if (selectedSubcategory && selectedSubcategory !== 'All') {
    // Filter items based on selected subcategory
    filteredItems = shuffledItems.filter(item => item.subcat === selectedSubcategory);
  }

  const categories = getCategories();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 755, // adjust breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      
      {
        breakpoint: 470, // adjust breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div style={{marginTop: "100px"}} className="shop">

      {loading && <div id="preloader">Loading...</div>}

      <div className="shopTitle">
        <h1>CHRIS'S STORE</h1>
        <h5><span style={{color: "#70b8a2"}}>##<b>NOTE:</b></span>The prices indicated do not reflect the actual pricing.<span style={{color: "#70b8a2"}}>##</span></h5>
      </div>
      <div className="d-flex justify-content-end align-items-center mb-xl-4" style={{marginRight: "25px"}}>
        <button className='searchbtn' onClick={() => navigate("/search")}> SEARCH | &#128270; </button>
      </div>
      {/* Filter by Category */}

      {/* DISPLAY ≥1200px  .START !!*/}
      <div class="d-none d-xl-block">
      <div className="d-flex justify-content-center align-items-center"> 
        {categories.map(cat => (
          <div className="lideSpace" class="d-flex justify-content-around">
          <button
            id="filterbtn"
            key={cat}
            onClick={() => handleCategorySelect(cat)}
    className={selectedCategory === cat ? 'focused' : ''}
          >
            {cat}
          </button>
          </div>
        ))}
        </div>
      </div>

      {/* DISPLAY ≥1200px .END !!*/}
      
      {/* DISPLAY </=1200px .START !!*/}
      <div class="d-xl-none">
      <Slider {...settings} className="lide">
        {categories.map(cat => (
          <div className="lideSpace" class="d-flex justify-content-around">
          <button
            id="filterbtn"
            key={cat}
            onClick={() => handleCategorySelect(cat)}
      className={selectedCategory === cat ? 'focused' : ''}
          >
            {cat}
          </button>
          </div>
        ))}
        </Slider>
        </div>
        {/* DISPLAY </=1200px .END !!*/}

      {/* Filter by Subcategory */}
      {/* <div className="d-flex justify-content-center align-items-center"> */}
        {/* Dynamic subcategories based on selected category */}

    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {selectedCategory &&
          getSubcategories(selectedCategory).map(subcat => (
            <button
              id="filterbtn"
              key={subcat}
              onClick={() => handleSubcategorySelect(subcat)}
              className={`btn ${selectedSubcategory === subcat ? 'focused' : ''}`}
            >
              {subcat}
            </button>
          ))}
      </div>
    </div>

      <div>

        <div className="products1">
{filteredItems.map((menuItem) => {
        const { id, productName, price, productImage, productInfo } = menuItem;
        const cartItemCount = cartItems[id] || 0; 
        return (
      <article key={id} className="product1">
          <img src={productImage} />
        <div className="description1">
          <div className="subName">
          <p style={{marginBottom: "10px"}}>
            {productName}
          </p>
          </div>
          <div>
            <Popover content={productInfo}>
              <button className="btn btn-secondary">view info</button>
            </Popover>
            </div>
          <div>        
          <p style={{fontWeight: "bold"}}> ${price}</p>
          </div>
        </div>

      <div className="countHandler">
          <button style={{borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px"}} onClick={() => removeFromCart(id)}> -  </button>
          <input  
          type='number'
          className="input-number"
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
        )
      })}
      </div>
      </div>
      
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center" onClick={scrollToTop}>
        <i className="bi bi-arrow-up-short"></i>
      </a>
  
    </div>
  );
}

