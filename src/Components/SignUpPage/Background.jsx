import React from "react";
import styled from "styled-components";
import Circle1 from "../..//img/SignUpPage/SignCircle1.png";
import Circle2 from "../../img/SignUpPage/SignCircle2.png";

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
    left: 0;
    bottom: 0;
    width: 586px;
    height: 418px;
  }
  #circle2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 523px;
    height: 647px;
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
