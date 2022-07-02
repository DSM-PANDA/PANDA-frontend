import React from "react";
import Background from "./Background";
import ContainerBox from "./LoginContainer";
import LoginItem from "../LoginPage/LoginItem";

export default function LoginPage() {
  return (
    <>
      <Background>
        <ContainerBox>
          <LoginItem />
        </ContainerBox>
      </Background>
    </>
  );
}
