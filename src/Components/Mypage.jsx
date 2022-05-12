import React from "react";
import styled from "styled-components";
import ContainerBox from "./ContainerBox";
import Bamboo from "../img/Bamboo.png";
import Circle1 from "../img/MyCircle1.png";
import Circle2 from "../img/MyCircle2.png";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4fef9;
  z-index: 1;

  #Circle1 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 541px;
    height: 591px;
  }

  #Circle2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 523px;
    height: 647px;
  }
`;

const Elements = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  h1 {
    font-size: 30px;
    padding: 10px 50px 0;
    margin-bottom: 0;
  }

  img {
    width: 450px;
    height: 450px;
  }

  button {
    position: absolute;
    bottom: 35px;
    left: 75px;
    width: 390px;
    height: 60px;
    border-radius: 25px;
    border: none;
    color: #fff;
    font-size: 30px;
  }

  #btn1 {
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }

  #btn2 {
    background: #639a55;
    transition: 0.3s;
  }

  #btn2:hover {
    opacity: 0;
  }
`;

function UserPage() {
  return (
    <Container>
      <img id="Circle1" src={Circle1} alt="" />
      <img id="Circle2" src={Circle2} alt="" />
      <ContainerBox>
        <Elements>
          <div>
            <h1>
              User님의 대나무에
              <br /> 쪽지가 0개 달려있습니다.
            </h1>
          </div>
          <img src={Bamboo} alt="" />
          <button id="btn1">내 대나무 공유하기</button>
          <button id="btn2">내 대나무 공유하기</button>
        </Elements>
      </ContainerBox>
    </Container>
  );
}

export default UserPage;
