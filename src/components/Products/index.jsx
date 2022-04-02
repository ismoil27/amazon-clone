import { Button } from "@mui/material";
import React from "react";
import "./product.css";
import hoodie from "../assets/images/hoodie 1.jpg";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>Lorem ipsum dolor sit amet.</p>
        <p className="product__price">
          <span>$</span>
          <strong> 239.00</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img src={hoodie} alt="" />

      <Button
        variant="primary"
        sx={{
          backgroundColor: "#f0c14b",
          borderColor: "#a88734",
          marginTop: "10px",
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
