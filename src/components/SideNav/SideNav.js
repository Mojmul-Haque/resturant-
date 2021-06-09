import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sideNavData } from "../../FakeData/sideNavData";
import userImage from "../../images/test2.png";

const SideNav = () => {
  const [shownav, setShowNav] = useState(false);

  return (
    <div className="d-flex">
      <div className="side-menu">
        <div className={shownav ? "remove-side-menu" : "active-side-menu"}>
          <ul>
            {sideNavData.map((nav, index) => (
              <li key={index}>
                <Link className="text-capitalize" to="/" title={nav.title}>
                  <FontAwesomeIcon icon={nav.icon} />
                  <span className={shownav ? "hideText" : "showText"}>
                    {nav.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="dashboard-contents flex-grow-1 bg-success">
        <div className="content-head d-flex justify-content-between align-items-center">
          <div className="toggle-menu-btn" onClick={() => setShowNav(!shownav)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="user-account">
            <img src={userImage} alt="" />
            <span>Mojmul Haque</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
