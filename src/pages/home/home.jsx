import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Shop } from "../shop/shop";
import { Contact } from "../contact";
import client1 from "./imgs/client-1.png";
import client2 from "./imgs/client-2.png";
import client3 from "./imgs/client-3.png";
import client4 from "./imgs/client-4.png";
import client5 from "./imgs/client-5.png";
import client6 from "./imgs/client-6.png";

export const Home = () => {
  return (
    <div>  
        <section id="hero" className="hero">
          <div className="hero-container" data-aos="zoom-in" data-aos-delay={100}>
            <h1>CHRIS.DEV'S STORE</h1>
            
            <p><div>
            <Link className="btn-get-started" to="/shop"> View Products </Link>
            </div></p>
          </div>
        </section>
        {/* Boxes */}
        <section className="p-5" id="secbox">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-sm-3 col-6">
                <div className="card h-100 bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 sm-3">
                    <i className="fa-solid fa-truck-fast" />
                    </div>
                    <h3 className="card-title sm-3" id="adtext">Free Shipping​</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="card h-100 bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 sm-3">
                    <i className="fa-solid fa-medal" />
                    </div>
                    <h3 className="card-title sm-3" id="adtext">Best Quality</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="card h-100 bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 sm-3">
                    <i className="fa-solid fa-arrow-right-arrow-left" />
                    </div>
                    <h3 className="card-title sm-3" id="adtext">14-Days Return</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="card h-100 bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 sm-3">
                    <i className="fa-solid fa-phone-volume" />
                    </div>
                    <h3 className="card-title sm-3" id="adtext">24/7 Support</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="clients section-bg">
          <div className="container">
            <h4 className="mb-0 border-5 border-start border-secondary">&nbsp;Trusted Brands</h4>
            <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="client-logo">
                  <img src={client1} className="img-fluid" alt="" data-aos="flip-right" />
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="client-logo">
                  <img src={client2} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay={100} />
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="client-logo">
                  <img src={client3} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay={200} />
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="client-logo">
                  <img src={client4} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay={300} />
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="client-logo">
                  <img src={client5}className="img-fluid" alt="" data-aos="flip-right" data-aos-delay={400} />
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="client-logo">
                  <img src={client6} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay={500} />
                </div>
              </div>
            </div>
            <h6>And much more...</h6>
          </div>
        </section>{/* End Clients Section */}
        

        <footer className="footer">
          <p><strong>CHRIS.DEV'S STORE</strong></p>
          <p>
            © 2024 |
            <span> CHRIS DEV.                                                                                                                                                 </span>
          </p>
        </footer>
      
    </div>
  );
};



