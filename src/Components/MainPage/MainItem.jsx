import React from "react";
import styled from "styled-components";
import styles from "../../styles/font.module.css";

const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 70px;
    margin: 40px 0 0;
  }

  button {
    position: absolute;
    bottom: 55px;
    left: 75px;
    width: 390px;
    height: 60px;
    border-radius: 25px;
    border: none;
    color: #fff;
    font-size: 30px;
    background: #639a55;
    cursor: pointer;
  }

  button:hover {
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }
`;

export default function MainItem() {
  return (
    <Container>
      <h1>DSM-PANDA</h1>
      <button>시작하기</button>
    </Container>
  );
}
