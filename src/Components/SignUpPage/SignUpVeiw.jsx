import React from "react";
import styled from "styled-components";
import Background from "./Background";
import SignUpContainer from "./SignUpContainer";
import SignUpItem from "./SignUpItemList/SignUpItem";

export default function SignUpVeiw() {
  return (
    <Background>
      <SignUpContainer>
        <SignUpItem />
      </SignUpContainer>
    </Background>
  );
}
