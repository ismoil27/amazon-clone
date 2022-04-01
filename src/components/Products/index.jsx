import React from "react";
import { products } from "../../utilities/products";

import { Container, ButtonStyle, Wrapper } from "./style";

const Products = () => {
  return (
    <Container>
      {products.map((value) => (
        <Wrapper key={value.id}>
          <Container.Image src={value?.image} />
          <Container.Info>
            <Container.Title>{value.title}</Container.Title>
            <p className="product__price">
              <small>$</small>
              <strong>{value.price}</strong>
            </p>
            <Container.Stars>
              <p>{value?.stars}</p>
            </Container.Stars>
            <ButtonStyle
              variant="contained"
              sx={{
                background: "#cd9042",
                color: "#111",
              }}
            >
              Add to Cart
            </ButtonStyle>
          </Container.Info>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Products;
