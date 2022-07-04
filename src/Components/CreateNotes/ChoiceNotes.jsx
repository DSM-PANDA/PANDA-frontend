import React from "react";
import styled from "styled-components";
import Background from "../UserPage/Background";
import ContainerBox from "../common/ContainerBox";
import Memo1 from "../../img/Memos/Memo1.png";
import Memo2 from "../../img/Memos/Memo2.png";
import Memo3 from "../../img/Memos/Memo3.png";
import Memo4 from "../../img/Memos/Memo4.png";
import Memo5 from "../../img/Memos/Memo5.png";
import Memo6 from "../../img/Memos/Memo6.png";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    position: absolute;
    top: 55px;
    left: 30px;
    margin: 0 0;
  }

  .backArrow {
    position: absolute;
    top: 10px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 18px;
    }
  }

  button {
    width: 390px;
    height: 50px;
    margin-top: 40px;
    padding: 0 0;
    border-radius: 21px;
    border: none;
    outline: nonr;
    color: #fff;
    font-size: 25px;
    background: #639a55;
    cursor: pointer;
  }

  button:hover {
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }
`;

const NoteList = styled.div`
  width: 450px;
  margin-top: 60px;
  padding: 10px;
  border: dashed 2px #4a7541;
  border-radius: 5%;
`;

const Notes = styled.div`
  &:nth-child(2) {
    margin-top: 50px;
  }

  img {
    width: 30%;
    height: auto;
    margin: 0 7.5px;
    border-radius: 10%;
    transition: background-color 0.2s;
  }

  img:hover {
    background: #dff4e9;
    /* box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25); */
  }
`;

export default function ChoiceNotes() {
  return (
    <Background>
      <ContainerBox>
        <Container>
          <div className="backArrow">
            <RiArrowLeftSLine />
            <p>이전으로</p>
          </div>
          <h1>쪽지를 골라주세요!</h1>
          <NoteList>
            <Notes>
              <Link to="/WriteNotes">
                <img src={Memo1} alt="" />
              </Link>
              <Link to="/WriteNotes">
                <img src={Memo2} alt="" />
              </Link>
              <Link to="/WriteNotes">
                <img src={Memo3} alt="" />
              </Link>
            </Notes>
            <Notes>
              <Link to="/WriteNotes">
                <img src={Memo4} alt="" />
              </Link>
              <Link to="/WriteNotes">
                <img src={Memo5} alt="" />
              </Link>
              <Link to="/WriteNotes">
                <img src={Memo6} alt="" />
              </Link>
            </Notes>
          </NoteList>
          <button>다음으로</button>
        </Container>
      </ContainerBox>
    </Background>
  );
}
