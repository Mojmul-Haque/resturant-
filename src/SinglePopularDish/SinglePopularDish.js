import React from "react";

const SinglePopularDish = ({ foodItem }) => {
  const { name, _id, image, description, price } = foodItem;
  return (
    <div className="col-lg-3">
      <figure className="food-item text-center">
        <img className="img-fluid" src={image} alt="" />
        <figcaption className="food-content">
          <h5>{name}</h5>
          <p>{description}</p>
          <h6>${price}</h6>
          <button className="brandBtn">Add To Cart</button>
        </figcaption>
      </figure>
    </div>
  );
};

export default SinglePopularDish;
