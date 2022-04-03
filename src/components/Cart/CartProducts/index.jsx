import React from "react";
import "./cartProduct.css";

const CartProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={image} alt="" />

      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
