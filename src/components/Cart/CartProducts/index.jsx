import { Button } from "@mui/material";
import React from "react";
import { useStateValue } from "../../context/contextProvider";
import "./cartProduct.css";

const CartProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={image} alt="" />

      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct__rating">
          {/* {(Array(rating).fill(), map((_, i) => <p>🌟</p>))} */}
        </div>
        <Button
          onClick={removeFromBasket}
          variant="primary"
          sx={{
            backgroundColor: "#f0c14b",
            borderColor: "#a88734",
            marginTop: "10px",
          }}
        >
          Remove from Cart
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
