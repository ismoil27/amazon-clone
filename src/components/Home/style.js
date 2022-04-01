import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export { Container, Image, Wrapper };
