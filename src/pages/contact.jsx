import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div>
        <section id="contact" className="contact py-5">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h1 className="text-center">Contact</h1>
              <p className="text-center py-3">Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
            </div>
            <div className="row gx-lg-0 gy-4">
              <div className="col-lg-4">
                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div className="info-item d-flex">
                    <i className="bi bi-geo-alt flex-shrink-0" />
                    <div>
                      <h4>Office:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex">
                    <i className="bi bi-clock flex-shrink-0" />
                    <div>
                      <h4>Open Hours:</h4>
                      <p>Mon-Sat: 8AM - 5PM</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex">
                    <i className="bi bi-phone flex-shrink-0" />
                    <div>
                      <h4>Call:</h4>
                      <p>+1 234 67890 00</p>
                    </div>
                  </div>{/* End Info Item */}
                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div>
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                  </div>{/* End Info Item */}
                </div>
              </div>
              <div className="col-lg-8">
                <form role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={7} placeholder="Message" required defaultValue={""} />
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>{/* End Contact Form */}
            </div>
          </div>
        </section>,{/* End Contact Section */}

        
      </div>
  );

};
