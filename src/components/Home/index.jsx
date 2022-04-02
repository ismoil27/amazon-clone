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
          <Product id="2344" image={headphone} price="499.00" rating={5} />
          <Product id="234" image={bottles} price="35.00" rating={3} />
        </div>
        <div className="cards">
          <Product id="34589" image={hoodie} price="240.00" rating={4.5} />
          <Product id="34580" image={alexa} price="99.00" rating={2} />
          <Product id="3458" image={book} price="19.00" rating={5} />
        </div>
        <div className="cards">
          <Product id="4441" image={play} price="400.00" rating={1} />
          <Product id="4442" image={play} price="400.00" rating={4} />
          <Product id="4443" image={play} price="400.00" rating={2} />
        </div>
        <div className="cards">
          <Product id="909" image={play} price="400.00" />
        </div>
      </div>
    </div>
  );
};

export default Home;
