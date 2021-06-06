import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const CopyRight = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row text-center align-items-center">
          <div className="col-lg-2">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://www.spheretheme.com/html/steam/assets/images/logo/logo-white.png"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="text-white">
              Copyright © <span>Steam Restaurant &amp; Drinks</span> 2020. All
              Rights Reserved.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="social-icon">
              <Link to="/">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
