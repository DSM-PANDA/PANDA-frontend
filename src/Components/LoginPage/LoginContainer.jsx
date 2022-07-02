import React from "react";
import styled from "styled-components";
import Bamboo from "../../img/Bamboo.png";

const Container = styled.div`
  position: absolute;
  width: 540px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: linear-gradient(180deg, #ffffff 65.1%, #eceaea 100%);
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
`;

const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 95px;
    left: 56px;
    width: 420px;
    height: 420px;
    background: url(${Bamboo});
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.3;
  }
`;

export default function LoginContainer({ children }) {
  return (
    <Container>
      <BackgroundImg>
        <>{children}</>
      </BackgroundImg>
    </Container>
  );
}
