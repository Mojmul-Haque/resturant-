import React from "react";
import CartHoverItem from "../CartHoverItem/CartHoverItem";
// const promise = loadStripe(
//   "pk_test_51IeJRZKMw2MF1W6edDkrMdO8w2NjnFPEcFt5MrQL7YAqDm1CurzYkEnVpXN2f3mW5ZAYPyg2RLSwTRerSlpBiCC500bQBrUsqy"
// );
const Checkout = () => {
  return (
    <section id="checkoutForm">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <CartHoverItem />
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
