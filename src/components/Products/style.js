import styled from "styled-components";
import Button from "@mui/material/Button";

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  z-index: 1;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  min-width: 100px;
  max-height: 400px; */
`;

Container.Info = styled.div`
  width: 200px;
  height: 100px;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  z-index: 1;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  /* width: 100%; */
  min-width: 100px;
  max-height: 400px;
`;

Container.Title = styled.div``;

Container.Stars = styled.div``;

Container.Image = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

const ButtonStyle = styled(Button)`
  /* background-color: #cd9042;
  :hover {
    background-color: #000;
  } */
`;

export { Container, ButtonStyle, Wrapper };
