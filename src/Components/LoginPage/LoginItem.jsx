import React from "react";
import styled from "styled-components";
import styles from "../../styles/font.module.css";

const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 70px;
    margin: 40px 0 0;
  }
`;

const ButttonElements = styled.div`
  position: absolute;
  bottom: 45px;
  left: 75px;

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

const InputElements = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 1px red;

  input {
    width: 390px;
    height: 35px;
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
  #Login_id {
  }
`;

export default function LoginItem() {
  return (
    <Container>
      <h1>Login</h1>
      <InputElements>
        <div id="Login_Id">
          <input type="text" placeholder="ID를 입력해주세요." />
          <label for="id">ID</label>
        </div>
      </InputElements>
      <ButttonElements>
        <button id="login-btn1">로그인 하기</button>
        <button id="login-btn2">회원가입 하기</button>
      </ButttonElements>
    </Container>
  );
}
