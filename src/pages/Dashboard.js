import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Route } from "react-router";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct/AddProduct";
import AddReview from "../components/AddReview/AddReview";
import SideNav from "../components/SideNav/SideNav";
import UserOrderList from "../components/UserOrderList/UserOrderList";
import userImage from "../images/test2.png";
import DemoDashBoard from "./DemoDashBoard";
// import "../SCSS/style.css";
const Dashboard = () => {
  const [shownav, setShowNav] = useState(false);
  return (
    <section className="" id="dashboard">
      <div className="d-flex">
        <SideNav shownav={shownav} />
        <div className="dashboard-contents flex-grow-1">
          <div className="content-head d-flex justify-content-between align-items-center">
            <div
              className="toggle-menu-btn"
              onClick={() => setShowNav(!shownav)}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="user-account">
              <img src={userImage} alt="" />
              <span>Mojmul Haque</span>
            </div>
          </div>
          <div className="dashboard-inner p-4">
            <Route exact path="/dashboard">
              <UserOrderList />
            </Route>
            <Route path="/dashboard/add-review">
              <AddReview />
            </Route>
            <Route path="/dashboard/add-food">
              <AddProduct />
            </Route>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
