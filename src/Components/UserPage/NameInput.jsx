import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "./Background";
import ContainerBox from "../ContainerBox";
import { GiBamboo } from "react-icons/gi";
import Bamboo from "../../img/Bamboo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 20px 0 40px;
    font-size: 40px;
    text-align: center;
  }
`;

const Elements = styled.div`
  position: absolute;
  width: 450px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0px 0px 7px #86af7f;
  border-radius: 20px;
  background-color: #aad5a2;
  h2 {
    color: #505050;
    align-self: flex-start;
    padding-left: 23px;
    font-size: 35px;
    margin: 0 0 10px;
  }
  p {
    width: 400px;
    height: 50px;
    padding-left: 18px;
    font-size: 21px;
    border: none;
    box-shadow: inset 0px 0px 3px #657b61;
    border-radius: 15px;
    outline: none;
    background-color: #fff;
    display: flex;
    align-items: center;
  }
  input {
    width: 400px;
    height: 50px;
    padding-left: 18px;
    font-size: 20px;
    border: none;
    box-shadow: inset 0px 0px 3px #657b61;
    border-radius: 15px;
    outline: none;
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
    left: 15%;
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

function NameInput() {
  return (
    <Background>
      <ContainerBox>
        <Wrapper>
          <h1>이름을 입력해주세요!</h1>
          <Elements>
            <div>
              <h2>To.</h2>
              <p>User</p>
            </div>
            <div>
              <h2>from.</h2>
              <input type="text" placeholder="10자 이내로 입력해주세요." />
            </div>
          </Elements>
          <Button>
            <Link to="/UsersBamboo">
              <button id="btn1">쪽지 달아주기</button>
              <button id="btn2">쪽지 달아주기</button>
            </Link>
          </Button>
        </Wrapper>
      </ContainerBox>
    </Background>
  );
}
export default NameInput;
