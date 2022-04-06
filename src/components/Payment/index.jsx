import { Button } from "@mui/material";
import { CardElement } from "@stripe/react-stripe-js";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import CartProduct from "../Cart/CartProducts";
import { useStateValue } from "../context/contextProvider";
import { getBasketTotal } from "../context/reducer";
import "./payment.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#111",
    backgroundColor: "#f0c14b",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#e7af21",
    },
  },
}));

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const classes = useStyles();

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
          <div className="payment__details">
            <form>
              <CardElement />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <Button className={classes.root} variant="primary">
                  Buy Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
