import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Bamboo from "../img/Bamboo.png";
import Circle1 from "../img/circle1.png";
import Circle2 from "../img/circle2.png";
import ContainerBox from "./ContainerBox";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4fef9;
  #Circle1 {
    position: absolute;
    top: 0;
    left: 0;
  }

  #Circle2 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Elements = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 50px;
  }

  img {
    width: 420px;
    height: 420px;
  }

  button {
    width: 390px;
    height: 60px;
    border-radius: 25px;
    border: none;
    background-color: #639a55;
    color: #fff;
    font-size: 30px;
  }

  button:hover {
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }
`;

function MainPage() {
  return (
    <Container>
      <img id="Circle1" src={Circle1} alt="" />
      <img id="Circle2" src={Circle2} alt="" />
      <>
        <ContainerBox>
          <Elements>
            <h1>DSM-PANDA</h1>
            <img src={Bamboo} alt="" />
            <Link to="/login">
              <button>시작하기</button>
            </Link>
          </Elements>
        </ContainerBox>
      </>
    </Container>
  );
}

export default MainPage;
