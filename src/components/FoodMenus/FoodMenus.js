import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import foodMenus from "../../FakeData/menusData.json";

const FoodMenus = () => {
  return (
    <section id="foodMenus">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="food-menus-head  section-head text-center">
              <h3>Our Menu</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur placerat nulla, in suscipit erat sodales id. Nullam
                ultricies eu turpis at accumsan. Mauris a sodales mi, eget
                lobortis nulla.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="menus-btn border text-center">
              <ul className="d-flex justify-content-between">
                <li className="active-menu">All</li>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row food-menu-inner">
          {foodMenus.map((food) => (
            <div className="col-lg-6" key={food._id}>
              <div className="menu-item d-flex align-items-center">
                <div className="menu-img border-right">
                  <img
                    className="img-fluid border-right"
                    src={food.image}
                    alt=""
                  />
                </div>
                <div className="item-content">
                  <h5>{food.name}</h5>
                  <h6>{food.subTitle}</h6>
                  <p>{food.description}</p>
                </div>
                <div className="right-item-content">
                  <h5>${food.price}</h5>
                  <div className="add-cart" title="Add Your Cart">
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenus;
