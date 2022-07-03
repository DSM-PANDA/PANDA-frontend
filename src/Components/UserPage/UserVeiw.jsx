import React from "react";
import Background from "./Background";
import UserContainer from "./UserContainer";
import UserItem from "./UserItemList/UserItem";

export default function LoginVeiw() {
  return (
    <>
      <Background>
        <UserContainer>
          <UserItem />
        </UserContainer>
      </Background>
    </>
  );
}
