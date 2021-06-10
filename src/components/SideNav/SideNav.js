import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { sideNavData } from "../../FakeData/sideNavData";

const SideNav = ({ shownav }) => {
  return (
    <div className="side-menu">
      <div className={shownav ? "remove-side-menu" : "active-side-menu"}>
        <ul>
          {sideNavData.map((nav, index) => (
            <li key={index}>
              <Link className="text-capitalize" to={nav.path} title={nav.title}>
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
  );
};

export default SideNav;
