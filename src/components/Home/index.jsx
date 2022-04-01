import React from "react";
import { Container, Image, Wrapper } from "./style";
import landing from "../assets/images/landing 3.jpg";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={landing} />
      </Wrapper>
    </Container>
  );
};

export default Home;
