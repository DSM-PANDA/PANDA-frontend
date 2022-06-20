import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Bamboo from "../img/Bamboo.png";
import Circle1 from "../img/loginCircle1.png";
import Circle2 from "../img/loginCircle2.png";
import ContainerBox from "./ContainerBox";

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
    width: 586px;
    height: 418px;
  }

  #Circle2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 523px;
    height: 647px;
  }
`;

const Section = styled.div`
  width: 540px;
  height: 650px;

  &:after {
    content: "";
    position: absolute;
    top: 80px;
    left: 55px;
    width: 420px;
    height: 420px;
    background: url(${Bamboo});
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.3;
    z-index: 2;
  }
`;

const Elements = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 50px;
  }
`;

const Input = styled.div`
  z-index: 10;
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin: 0 0 17px;
    font-size: 25px;
  }

  input {
    width: 390px;
    height: 35px;
    margin: 0 0 40px 0;
    padding: 50px 10px 0 5px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #608182;
    font-size: 20px;
    font-weight: 500;
    color: #000;
    outline: none;
  }
  label {
    position: absolute;
    left: 0px;
    top: 15px;
    font-size: 25px;
    font-weight: 600;
    color: #505050;
    transition: all 0.5s ease;
  }
`;

const IdInput = styled.div`
  position: relative;
  width: 400px;
`;

const PwInput = styled.div`
  margin-bottom: 25px;
  position: relative;
  width: 400px;
`;

const Button = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    position: absolute;
    bottom: 0;
    left: -192px;
    margin-top: 20px;
    width: 390px;
    height: 55px;
    border-radius: 21px;
    border: none;
    color: #fff;
    font-size: 20px;
  }

  //button1
  #loginBtn1 {
    bottom: 80px;
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }

  #loginBtn2 {
    bottom: 80px;
    background: #639a55;
    transition: 0.3s;
  }
  #loginBtn2:hover {
    opacity: 0;
  }

  //button2
  #singupBtn1 {
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }

  #singupBtn2 {
    background: #639a55;
    transition: 0.3s;
  }
  #singupBtn2:hover {
    opacity: 0;
  }
`;

export default function LoginPage() {
  const [inputValue, setInputValue] = useState("");
  function gapEvent(event) {
    if (event.keyCode === 13 && inputValue === "") {
      alert("내용을 입력해주세요.");
    }
  }

  const change = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <img id="Circle1" src={Circle1} alt="" />
      <img id="Circle2" src={Circle2} alt="" />
      <ContainerBox>
        <Section>
          <Elements>
            <h1>LOGIN</h1>
            <Input>
              <IdInput>
                <input
                  type="text"
                  autocomplete="off"
                  required
                  onKeyDown={gapEvent}
                  onChange={change}
                  value={inputValue}
                />
                <label for="id">ID</label>
              </IdInput>
              <PwInput>
                <input type="text" autocomplete="off" required />
                <label for="pw">PW</label>
              </PwInput>
            </Input>
            <Button>
              <button id="loginBtn1" type="submit">
                로그인 하기
              </button>
              <button id="loginBtn2" type="submit" onClick={gapEvent}>
                로그인 하기
              </button>
              <Link to="/SignUp">
                <button id="singupBtn1">회원가입 하기</button>
                <button id="singupBtn2">회원가입 하기</button>
              </Link>
            </Button>
          </Elements>
        </Section>
      </ContainerBox>
    </Container>
  );
}
