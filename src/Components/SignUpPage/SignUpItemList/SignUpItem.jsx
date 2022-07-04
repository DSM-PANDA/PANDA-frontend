import React from "react";
import styled from "styled-components";
import InputItem from "./InputItemList/InputItem";
import ButtonItem from "./ButtonItemList/ButtonItem";

const Container = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 70px;
    margin: 30px 0 0;
  }
`;

export default function SignUpItem() {
  return (
    <Container>
      <h1>SignUp</h1>
      <InputItem />
      <ButtonItem />
    </Container>
  );
}
