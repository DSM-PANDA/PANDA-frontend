import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  h1 {
    position: absolute;
    top: 30px;
    left: 30px;
    margin: 0 0;
  }
`;

export default function InfoItem() {
  return (
    <Container>
      <h1>
        User님의 대나무에
        <br />
        쪽지가 0개 달려있습니다.
      </h1>
    </Container>
  );
}
