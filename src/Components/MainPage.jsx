import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100hw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4fef9;
`;

const Section = styled.div`
  width: 665px;
  height: 896px;
  background: #fff;
`;

function MainPage() {
  return (
    <Container>
      <Section></Section>
    </Container>
  );
}

export default MainPage;
