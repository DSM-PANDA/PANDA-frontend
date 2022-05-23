import React from "react";
import styled from "styled-components";
import ContainerBox from "../ContainerBox";
import Background from "./Background";
import Memo1 from "../../img/Memos/Memo1.png";
import Memo2 from "../../img/Memos/Memo2.png";
import Memo3 from "../../img/Memos/Memo3.png";
import Memo4 from "../../img/Memos/Memo4.png";
import Memo5 from "../../img/Memos/Memo5.png";
import Memo6 from "../../img/Memos/Memo6.png";

const Elements = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    position: absolute;
    top: 10px;
    font-size: 40px;
  }
`;

const Memos = styled.div`
  img {
    width: 170px;
    height: 150px;
    transition: 0.4s;
  }
  img:hover {
    background-color: #eafbf4;
    border-radius: 13px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    position: absolute;
    bottom: 0;
    margin-top: 20px;
    width: 390px;
    height: 55px;
    border-radius: 21px;
    border: none;
    color: #fff;
    font-size: 20px;
  }
  #btn1 {
    bottom: 45px;
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }
  #btn2 {
    bottom: 45px;
    background: #639a55;
    transition: 0.3s;
  }
  #btn2:hover {
    opacity: 0;
  }
`;

function ChoiceMemo() {
  return (
    <Background>
      <ContainerBox>
        <Elements>
          <h1>쪽지를 골라주세요!</h1>
          <Memos>
            <div>
              <img src={Memo1} alt="" />
              <img src={Memo2} alt="" />
              <img src={Memo3} alt="" />
            </div>
            <div>
              <img src={Memo4} alt="" />
              <img src={Memo5} alt="" />
              <img src={Memo6} alt="" />
            </div>
          </Memos>
          <Button>
            <button id="btn1">쪽지 달아주기</button>
            <button id="btn2">쪽지 달아주기</button>
          </Button>
        </Elements>
      </ContainerBox>
    </Background>
  );
}
export default ChoiceMemo;
