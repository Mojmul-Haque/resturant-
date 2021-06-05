import React from "react";
import { Link } from "react-router-dom";
import userImagae from "../../images/test2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light main-menu">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdownLink ">
              <Link
                className="nav-link user-account"
                aria-current="page"
                to="/"
              >
                <img src={userImagae} alt="user_Account_Image" />{" "}
                <span className="position-relative">Account</span>
              </Link>
              <ul className="account-details hover-item">
                <li>Show Orders</li>
                <li>Payments</li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span> Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// FontAwesomeIcon
export default Nav;
