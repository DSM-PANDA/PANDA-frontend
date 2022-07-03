import React from "react";
import styled from "styled-components";
import ButtonItem from "./ButtonItemList/ButtonItem";
import InfoItem from "./InfoItemList/InfoItem";

const Container = styled.div``;

export default function UserItem() {
  return (
    <Container>
      <InfoItem />
      <ButtonItem />
    </Container>
  );
}
