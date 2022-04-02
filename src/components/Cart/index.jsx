import React from "react";
import Total from "../Total";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="lists__left">
        <h2 className="cart__title">Shopping Cart</h2>
        {/* <Basket/> */}
      </div>

      <div className="lists__right">
        <Total />
      </div>
    </div>
  );
};

export default Cart;
