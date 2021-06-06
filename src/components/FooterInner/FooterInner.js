import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import ins1 from "../../images/fonted_image/ins1.jpg";
import ins2 from "../../images/fonted_image/ins2.jpg";
import ins3 from "../../images/fonted_image/ins3.jpg";
import ins4 from "../../images/fonted_image/ins4.jpg";
import ins5 from "../../images/fonted_image/ins5.jpg";
import ins6 from "../../images/fonted_image/ins6.jpg";

const FooterInner = () => {
  const contactInfo = [];
  return (
    <div className="footer-inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3>CONTACT US</h3>
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                20, floor, Restaurant Food & Drinks, Nr, Queenslad Victoria
                Building, USA
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>1800 000 0000,</span>
                <span className="d-block">+88 123 1234 1234</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@yourdomainname.com</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>INFORMATION</h3>
            <ul>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Delivery Information</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>OPEN HOURS</h3>
            <ul>
              <li>Monday - Friday : 9 am to 12 am.</li>
              <li>Saturday - Sunday : 24 Hour Open</li>
              <li>Breakfast : 7 am to 12 pm</li>
              <li>Lunch : 12 pm to 7 pm</li>
              <li>Dinner : 7 am to 12 am</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>INSTAGRAM</h3>
            <div className="box-img">
              <ul>
                <li>
                  <img src={ins1} className="img-fluid" alt="" />
                  <img src={ins2} className="img-fluid" alt="" />
                  <img src={ins3} className="img-fluid" alt="" />
                </li>
                <li>
                  <img src={ins4} className="img-fluid" alt="" />
                  <img src={ins5} className="img-fluid" alt="" />
                  <img src={ins6} className="img-fluid" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInner;
