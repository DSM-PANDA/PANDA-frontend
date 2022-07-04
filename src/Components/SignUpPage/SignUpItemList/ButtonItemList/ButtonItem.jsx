import React from "react";
import styled from "styled-components";

const ButttonElements = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 57px;
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
`;

export default function ButtonItem() {
  return (
    <ButttonElements>
      <button>대나무 만들기</button>
    </ButttonElements>
  );
}
