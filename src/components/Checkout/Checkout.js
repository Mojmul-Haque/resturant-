import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../Redux/Action/cartAction";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import SingleCart from "../SingleCart/SingleCart";

const Checkout = () => {
  const cartItems = useSelector((state) => {
    return state.shop.cart;
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [totaItems, setTotaItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cartItems.forEach((pd) => {
      items = pd.qty;
      price += pd.price * pd.qty;
    });
    setTotaItems(items);
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <section id="checkoutForm">
      {cartItems.length ? (
        <div className="container">
          <div className="row ">
            <div className="cart-heading py-2 d-flex text-white justify-content-between">
              <h5 className="w-50">Product</h5>
              <h5 className="w-25">Quantity</h5>
              <h5 className="w-25 text-end">SubTotal</h5>
            </div>
            <div className="col-lg-12">
              {cartItems.length
                ? cartItems.map((pd) => <SingleCart product={pd} />)
                : "...Loading"}
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-6">
              <div className="cart-price-calculate">
                <ul className="mt-2">
                  <li className="d-flex justify-content-between">
                    <h4 className="ms-3">Total</h4>
                    <h4>${totalPrice}</h4>
                  </li>
                </ul>
                <div className="text-end">
                  <CheckoutForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h4 className="text-center">
            You have no Orders. <Link to="/">Go to shop</Link>
          </h4>
        </div>
      )}
    </section>
  );
};

export default Checkout;
