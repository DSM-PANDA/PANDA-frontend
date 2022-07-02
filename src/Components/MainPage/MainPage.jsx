import React from "react";
import Background from "../MainPage/Background";
import ContainerBox from "./MainContainer";
import MainItem from "./MainItem";

export default function MainPage() {
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
