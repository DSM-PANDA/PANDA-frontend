import React from "react";
import Background from "../MainPage/Background";
import ContainerBox from "./ContainerBox";
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
