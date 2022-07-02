import React from "react";
import styled from "styled-components";
import styles from "../../styles/font.module.css";

const Container = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 70px;
    margin: 35px 0 0;
  }
`;

const InputElements = styled.div`
  z-index: 10;
  position: relative;
  width: 390px;
  height: auto;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 35px;
    margin: 0;
    padding: 0 0 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #608182;
    font-size: 20px;
    font-weight: 500;
    color: #000;
    outline: none;
    cursor: pointer;
  }

  label {
    font-size: 25px;
    font-weight: 600;
    color: #505050;
    transition: all 0.5s ease;
  }

  .LoginInput {
    position: relative;
    width: 100%;
    height: 100px;
  }

  .LoginInput:nth-child(2) {
    margin-top: 70px;
  }
`;

const ButttonElements = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 45px;
  left: 75px;
  width: auto;

  button {
    width: 390px;
    height: 50px;
    border-radius: 21px;
    border: none;
    color: #fff;
    font-size: 25px;
    background: #639a55;
    cursor: pointer;
  }

  button:hover {
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }

  #login-btn2 {
    margin-top: 12px;
  }
`;

export default function LoginItem() {
  return (
    <Container>
      <h1>Login</h1>
      <InputElements>
        <div className="LoginInput">
          <label>ID</label>
          <input type="text" placeholder="ID를 입력해주세요." required />
        </div>
        <div className="LoginInput">
          <label>PW</label>
          <input type="text" placeholder="PW를 입력해주세요." required />
        </div>
      </InputElements>
      <ButttonElements>
        <button id="login-btn1">로그인 하기</button>
        <button id="login-btn2">회원가입 하기</button>
      </ButttonElements>
    </Container>
  );
}
