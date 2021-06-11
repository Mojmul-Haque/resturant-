import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const RatingStar = () => {
  const [clickStar, setClickStar] = useState(null);
  const [hoverStar, setHoverStar] = useState(null);
  return (
    <div>
      <div className="dashboard-header">
        <h6 className="d-inline-block px-4 text-white py-3 mb-4">
          Please Give your value able feedback
        </h6>
      </div>
      <br />
      <h4 className="mb-2">Rating Star</h4>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              style={{ display: "none" }}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setClickStar(ratingValue)}
            />
            <FontAwesomeIcon
              title="select star"
              color={
                ratingValue <= (hoverStar || clickStar) ? "#ffc107" : " #e4e5e9"
              }
              style={{ cursor: "pointer", fontSize: "32px" }}
              icon={faStar}
              onMouseEnter={() => setHoverStar(ratingValue)}
              onMouseLeave={() => setHoverStar(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStar;
