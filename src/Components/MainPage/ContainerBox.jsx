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

  img {
    width: 420px;
    height: 420px;
    margin-bottom: 50px;
    opacity: 0.8;
  }
`;

const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 45px;
  opacity: 0.8;
  background-image: url(${Bamboo});
  background-position: center;
  background-size: 420px 420px;
  background-repeat: no-repeat;
`;

function ContainerBox({ children }) {
  return (
    <Container>
      <BackgroundImg>
        <>{children}</>
      </BackgroundImg>
    </Container>
  );
}

export default ContainerBox;
