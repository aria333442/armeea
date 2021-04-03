import React from "react";
import { Link, NavLink } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "../css/_card.scss";
const ProductCard = ({ x }) => {
  return (
    <div className="productCard">
      <img src={x.img} alt="" />
      <StarRatings
        rating={5}
        starRatedColor="#ff6606"
        numberOfStars={5}
        name="rating"
        starSpacing="5px"
        starDimension="20px"
      />
      <p>{x.productName}</p>
      <p>${x.price}</p>
      <div>
        <NavLink to="/product/x" className="btn__details">
          DETALLES
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
