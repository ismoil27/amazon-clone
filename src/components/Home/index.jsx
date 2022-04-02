import React from "react";
import "./home.css";

import landing from "../assets/images/landing.png";
import Product from "../Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={landing} alt="" className="home__image" />
        <div className="cards">
          <Product />
          {/* <Product /> */}
        </div>
        <div className="cards">
          {/* <Product />
          <Product />
          <Product /> */}
        </div>
        <div className="cards">{/* <Product /> */}</div>
      </div>
    </div>
  );
};

export default Home;
