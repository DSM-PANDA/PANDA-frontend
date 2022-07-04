import React from "react";
import Background from "./Background";
import ContainerBox from "./MainContainer";
import MainItem from "./MainItem";

export default function MainVeiw() {
  return (
    <>
      <Background>
        <ContainerBox>
          <MainItem />
        </ContainerBox>
      </Background>
    </>
  );
}
