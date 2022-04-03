import React from "react";
import { useStateValue } from "../context/contextProvider";
import Total from "../Total";
import "./cart.css";
import CartProduct from "./CartProducts";

const Cart = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="lists__left">
        <h2 className="cart__title">Shopping Cart</h2>
        {basket.map((value) => (
          <CartProduct
            id={value.id}
            title="AnyCasting Software Co. Ltd., has developed and polished AnyCasting Software – a top tier casting simulation program, over 20 years. Currently we are working with companies manufacturing automobiles"
            price={value.price}
            image={value.image}
            rating={value.rating}
          />
        ))}
      </div>

      <div className="lists__right">
        <Total />
      </div>
    </div>
  );
};

export default Cart;
