import React from "react";
import { Container, Image, Wrapper } from "./style";
import landing from "../assets/images/landing 3.jpg";
import Products from "../Products";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={landing} />

        <Wrapper.Cards>
          <Products />
        </Wrapper.Cards>
      </Wrapper>
    </Container>
  );
};

export default Home;
