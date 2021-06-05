import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faSearch } from "@fortawesome/free-solid-svg-icons";
import lineImage from "../../images/fonted_image/lines.png";

const Order = () => {
  return (
    <section id="order-part">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="order-head border-shape">
              <h3>Order Delivery And Take Out</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur placerat nulla, in suscipit erat sodales id. Nullam
                ultricies eu turpis at accumsan. Mauris a sodales mi, eget
                lobortis nulla.
              </p>
            </div>
            <div className="order-inner">
              <ul className="d-flex justify-content-center">
                <li>
                  <FontAwesomeIcon icon={faHamburger} />
                  <p>Select Food</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHamburger} />
                  <p>Order Food</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHamburger} />
                  <p>Delivery or Take Out</p>
                </li>
              </ul>
              <img src={lineImage} alt="line_image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
