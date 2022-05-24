import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  #div {
    margin-top: 30px;
  }
`;

function ChoiceMemo() {
  return (
    <Background>
      <ContainerBox>
        <Elements>
          <h1>쪽지를 골라주세요!</h1>
          <Memos>
            <div id="div">
              <Link to="/WhiteMemo">
                <img src={Memo1} alt="" />
              </Link>
              <Link to="/RedMemo">
                <img src={Memo2} alt="" />
              </Link>
              <Link to="/OrangeMemo">
                <img src={Memo3} alt="" />
              </Link>
            </div>
            <div id="div">
              <Link to="/YellowMemo">
                <img src={Memo4} alt="" />
              </Link>
              <Link to="/BlueMemo">
                <img src={Memo5} alt="" />
              </Link>
              <Link to="/purpleMemo">
                <img src={Memo6} alt="" />
              </Link>
            </div>
          </Memos>
        </Elements>
      </ContainerBox>
    </Background>
  );
}
export default ChoiceMemo;
