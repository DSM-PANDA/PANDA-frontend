import React from "react";
import styled from "styled-components";
import ContainerBox from "./ContainerBox";
import Bamboo from "../img/Bamboo.png";
import Circle1 from "../img/UsersCircle1.png";
import Circle2 from "../img/UsersCircle2.png";

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
  position: relative;
  height: 100%;
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
    width: 430px;
    height: 430px;
  }
`;

const Button = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  button {
    position: absolute;
    bottom: 0;
    margin-top: 20px;
    width: 390px;
    height: 55px;
    border-radius: 21px;
    border: none;
    color: #fff;
    font-size: 20px;
    border: 1px solid red;
  }

  #MemoBtn1 {
    bottom: 80px;
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }

  #MemoBtn2 {
    bottom: 80px;
    background: #639a55;
    transition: 0.3s;
  }

  #MemoBtn2:hover {
    opacity: 0;
  }

  #SingupBtn1 {
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }

  #SingupBtn2 {
    background: #639a55;
    transition: 0.3s;
  }

  #SingupBtn2:hover {
    opacity: 0;
  }
`;

function UsersPage() {
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
          <Button>
            <button id="MemoBtn1" type="submit">
              쪽지 달아주러 가기
            </button>
            <button id="MemoBtn2" type="submit">
              쪽지 달아주러 가기
            </button>
            <button id="SingupBtn1">내 대나무 만들러 가기</button>
            <button id="SingupBtn2">내 대나무 만들러 가기</button>
          </Button>
        </Elements>
      </ContainerBox>
    </Container>
  );
}

export default UsersPage;
