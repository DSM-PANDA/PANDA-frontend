import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

  #user-btn2 {
    margin-top: 12px;
  }
`;

export default function ButtonItem() {
  return (
    <Container>
      <button id="user-btn1">쪽지 달아주러 가기</button>
      <button id="user-btn2">내 대나무 만들러 가기</button>
    </Container>
  );
}
