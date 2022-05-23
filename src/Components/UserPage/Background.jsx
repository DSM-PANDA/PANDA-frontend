import React from "react";
import styled from "styled-components";
import Circle1 from "../../img/UsersCircle1.png";
import Circle2 from "../../img/UsersCircle2.png";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4fef9;
  z-index: 1;

  #Circle1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 598px;
    height: 587px;
  }

  #Circle2 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 478px;
    height: 686px;
  }
`;

function Background({ children }) {
  return (
    <Container>
      <img id="Circle1" src={Circle1} alt="" />
      <img id="Circle2" src={Circle2} alt="" />
      <>{children}</>
    </Container>
  );
}
export default Background;
