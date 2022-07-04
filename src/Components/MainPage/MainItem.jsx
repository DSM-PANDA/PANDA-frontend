import React from "react";
import styled from "styled-components";
import styles from "../../styles/font.module.css";
import { Link } from "react-router-dom";

const Container = styled.div`
  div {
    position: relative;
    h1 {
      text-align: center;
      font-size: 70px;
      margin: 32px 0 0;
    }

    p {
      position: absolute;
      top: 65px;
      left: 29%;
      text-align: center;
      font-size: 18px;
    }
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
      <div>
        <h1>DSM-PANDA</h1>
        <p>쪽지를 전하고 마음을 주고받으세요</p>
      </div>

      <Link to="/login">
        <button>시작하기</button>
      </Link>
    </Container>
  );
}
