import React from "react";
import Background from "./Background";
import LoginContainer from "./LoginContainer";
import LoginItem from "./LoginItem";

export default function LoginVeiw() {
  return (
    <>
      <Background>
        <LoginContainer>
          <LoginItem />
        </LoginContainer>
      </Background>
    </>
  );
}
