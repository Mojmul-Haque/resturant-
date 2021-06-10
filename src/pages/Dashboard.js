import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AddProduct from "../components/AddProduct/AddProduct";
import AddReview from "../components/AddReview/AddReview";
import SideNav from "../components/SideNav/SideNav";
import UserOrderList from "../components/UserOrderList/UserOrderList";
import userImage from "../images/test2.png";
// import "../SCSS/style.css";
const Dashboard = () => {
  const [shownav, setShowNav] = useState(false);
  return (
    <section id="dashboard">
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
            <UserOrderList />
            {/* <AddReview /> */}
            <AddProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
