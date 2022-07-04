import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  h1 {
    position: absolute;
    top: 30px;
    left: 30px;
    margin: 0 0;
  }

  button {
    position: absolute;
    bottom: 57px;
    left: 76px;
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
`;

export default function MyItem() {
  return (
    <Container>
      <h1>
        User님의 대나무에
        <br />
        쪽지가 0개 달려있습니다.
      </h1>
      <button>내 대나무 공유하기</button>
    </Container>
  );
}
