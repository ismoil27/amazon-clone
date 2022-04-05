import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "../Cart/CartProducts";
import { useStateValue } from "../context/contextProvider";
import "./payment.css";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="basket"> {basket.length} items </Link> )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Jon Brew street</p>
            <p>Dallas, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Shopping Cart</h3>
          </div>
          <div className="payment__items">
            {basket.map((value) => (
              <CartProduct
                key={value.id}
                id={value.id}
                title="AnyCasting Software Co. Ltd., has developed and polished AnyCasting Software – a top tier casting simulation program, over 20 years. Currently we are working with companies manufacturing automobiles"
                image={value.image}
                price={value.price}
                rating={value.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
