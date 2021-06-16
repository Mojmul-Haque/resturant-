import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adjustQty, removeFromCart } from "../../Redux/Action/cartAction";

const SingleCart = ({ product }) => {
  const { name, image, price, _id, qty } = product;

  const [quantity, setQuantity] = useState(qty === 0 ? 1 : qty);
  const totalPrice = qty * price;
  console.log(quantity);
  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    if (e.target.value > 0) {
      const result = dispatch(adjustQty(_id, Number(e.target.value)));
      setQuantity(result.payload.qty);
    }
  };

  return (
    <div className="main-cart">
      <div className="cart-product d-flex justify-content-between align-items-center">
        <div className="cart-left-item  w-50">
          <figure className="d-flex">
            <img className="" src={image} alt="food" />
            <figcaption className="cart-content">
              <h6 className>{name}</h6>
              <p>Price: ${price}</p>
              <span
                onClick={() => dispatch(removeFromCart(_id))}
                className="d-block"
              >
                Remove
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="cart-quantity w-25">
          <input onChange={handleQuantity} type="number" value={quantity} />
        </div>
        <div className="cart-subtotal w-25 text-end">
          <h5>${totalPrice}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
