import React from "react";
import styled from "styled-components";
import Circle1 from "../../img/MainPage/circle1.png";
import Circle2 from "../../img/MainPage/circle2.png";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4fef9;

  #circle1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  #circle2 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default function Background({ children }) {
  return (
    <Container>
      <img id="circle1" src={Circle1} alt="" />
      <img id="circle2" src={Circle2} alt="" />
      <>{children}</>
    </Container>
  );
}
