import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 540px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: linear-gradient(180deg, #ffffff 65.1%, #eceaea 100%);
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
`;

export default function ContainerBox({ children }) {
  return (
    <Container>
      <>{children}</>
    </Container>
  );
}
