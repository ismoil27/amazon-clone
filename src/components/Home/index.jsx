import React from "react";
import "./home.css";
import hoodie from "../assets/images/hoodie 1.jpg";
import book from "../assets/images/book.jpg";
import alexa from "../assets/images/alexa.jpeg";
import headphone from "../assets/images/headphone.jpeg";
import play from "../assets/images/play.webp";
import bottles from "../assets/images/bottles.png";

import landing from "../assets/images/landing.png";
import Product from "../Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={landing} alt="" className="home__image" />
        <div className="cards">
          <Product image={headphone} price="499.00" />
          <Product image={bottles} price="35.00" />
        </div>
        <div className="cards">
          <Product image={hoodie} price="240.00" />
          <Product image={alexa} price="99.00" />
          <Product image={book} price="19.00" />
        </div>
        <div className="cards">
          <Product image={play} price="400.00" />
          <Product image={play} price="400.00" />
          <Product image={play} price="400.00" />
        </div>
        <div className="cards">
          <Product image={play} price="400.00" />
        </div>
      </div>
    </div>
  );
};

export default Home;
