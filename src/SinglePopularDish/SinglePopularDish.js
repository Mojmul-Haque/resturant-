import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Action/cartAction";
// import { addToCart } from "../Redux/Action/cartAction";
// import { addToCart } from "../Redux/Action/cartAction";
const SinglePopularDish = ({ foodItem }) => {
  const { name, _id, image, description, price } = foodItem;

  const dispatch = useDispatch();
  return (
    <div className="col-lg-3">
      <figure className="food-item text-center">
        <img className="img-fluid" src={image} alt="" />
        <figcaption className="food-content">
          <h5>{name}</h5>
          <p>{description}</p>
          <h6>${price}</h6>
          <button
            onClick={() => dispatch(addToCart([...Array(foodItem)], _id))}
            className="brandBtn"
          >
            Add To Cart
          </button>
        </figcaption>
      </figure>
    </div>
  );
};

export default SinglePopularDish;
