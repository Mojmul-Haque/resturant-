import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CartHoverItem = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = [
    { name: "chicken", price: 200, id: 1, qty: 1 },
    { name: "food", price: 600, id: 2, qty: 1 },
    { name: "banana", price: 200, id: 3, qty: 1 },
    { name: "rice", price: 800, id: 4, qty: 1 },
  ];

  useEffect(() => {
    let price = 0;
    cartItems.forEach((food) => {
      price += food.qty * food.price;
    });
    setTotalPrice(price);
  }, []);

  return (
    <div className="cart-item-show text-white">
      <div className="cart-header">
        <figure className="d-flex">
          <img
            src="https://askbootstrap.com/preview/osahan-eat/img/cart.jpg"
            className="img-fluid"
            alt=""
          />
          <figcaption>
            <h6>Guy's World Famous Chicken</h6>
            <p>310 s front , Memphis, USA</p>
          </figcaption>
        </figure>
      </div>
      <div className="cart-item-inner">
        <div className="cart-food" id="cart-food-scroll">
          {cartItems.map((food) => (
            <p key={food.id} className="text-transform-capitalize price-manage">
              <span>
                {food.name} <span style={{ fontSize: "12px" }}>X</span>{" "}
                {food.qty}
              </span>
              <span className="price-right-side">${food.price}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="cart-bottom">
        <div className="div">
          <h6 className="position-relative">
            Sub Total <span className="price-right-side">{totalPrice}</span>
          </h6>
          <h6 className="position-relative">
            Shipment <span className="price-right-side">$50</span>
          </h6>
        </div>
        <div className="checkout-btn">
          {/* <Link to="/">Checkout</Link> */}
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default CartHoverItem;
