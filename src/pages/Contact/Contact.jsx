import React from "react";
import "./contact.css";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";

const Contact = ({ refrence }) => {
  return (
    <section className="contact" id="contact" ref={refrence}>
      <div className="container">
        <SectionTitle title="Contact" subtitle="Contact Me" />
        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>My Address</h3>
              <p>North West Delhi-110086,India</p>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="#" className="twitter-х">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="" className="skype">
                  <i className="bi bi-skype"></i>
                </a>
                <a href="#" className="Linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 st-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>
                <a href="mailto:rajkumar2499nice@gmail.com">
                  rajkumar2499nice@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 at-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Call Me</h3>
              <p>8700066069</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
