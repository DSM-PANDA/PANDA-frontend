import React from "react";
import styled from "styled-components";
import ContainerBox from "../ContainerBox";
import Background from "../UserPage/Background";
import Memo1 from "../../img/Memos/Memo1.png";

const Elements = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    position: absolute;
    top: 10px;
    font-size: 40px;
  }
  img {
    width: 1000px;
    height: 600px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  }
  #btn1 {
    bottom: 45px;
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }
  #btn2 {
    bottom: 45px;
    background: #639a55;
    transition: 0.3s;
  }
  #btn2:hover {
    opacity: 0;
  }
`;

function WhiteMemo() {
  return (
    <Background>
      <ContainerBox>
        <Elements>
          <h1>USER</h1>
          <img src={Memo1} alt="" />
          <Button>
            <button id="btn1">쪽지 달아주기</button>
            <button id="btn2">쪽지 달아주기</button>
          </Button>
        </Elements>
      </ContainerBox>
    </Background>
  );
}
export default WhiteMemo;
