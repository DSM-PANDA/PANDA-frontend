import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 10;
  position: relative;
  width: 390px;
  height: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  #first_child {
    margin: 0 0;
  }
`;

const InputElements = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  margin-top: 25px;

  input {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0 0 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #608182;
    font-size: 17px;
    font-weight: 500;
    color: #000;
    outline: none;
    cursor: pointer;
  }

  label {
    font-size: 20px;
    font-weight: 600;
    color: #505050;
    transition: all 0.5s ease;
  }
`;

export default function InputItem() {
  return (
    <Container>
      <InputElements id="first_child">
        <input
          type="text"
          placeholder="1~10자 이내로 입력해 주세요."
          required
        />
        <label>이름</label>
      </InputElements>
      <InputElements>
        <input
          type="text"
          placeholder="1~10자 이내로 입력해 주세요."
          required
        />
        <label>아이디(ID)</label>
      </InputElements>
      <InputElements>
        <input
          type="text"
          placeholder="영문+ 숫자 + 특수문자를 6~20자 이내로 입력해주세요"
          required
        />
        <label>비밀번호(PW)</label>
      </InputElements>
      <InputElements>
        <input
          type="text"
          placeholder="영문 + 숫자 + 특수문자를 6~20자 이내로 입력해주세요"
          required
        />
        <label>비밀번호 확인(PW)</label>
      </InputElements>
    </Container>
  );
}
