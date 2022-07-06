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
import { useState } from "react";

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
    margin-top: 65px;
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
  padding: 10px 3px;
  border: dashed 2px #4a7541;
  border-radius: 5%;
`;

const Notes = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  label {
    width: 135px;
    input {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: 3px 7.5px;

      visibility: hidden;
      transition: background-color 0.2s;
      cursor: pointer;
    }

    img:hover {
      background: #dff4e9;
      border-radius: 10%;
      /* box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25); */
    }

    img {
      width: 135px;
      height: auto;
    }

    input[type="radio"]:checked + img {
      background: #dff4e9;
      border-radius: 10%;
    }
  }
`;

export default function ChoiceNotes() {
  const [focusNote, setFocusNote] = useState([]);

  const onClickRadio = (e) => {
    console.log(e.target.value);
    setFocusNote(e.target.value);
  };

  const noteItemList = [
    { name: "Note1", img: Memo1 },
    { name: "Note2", img: Memo2 },
    { name: "Note3", img: Memo3 },
    { name: "Note4", img: Memo4 },
    { name: "Note5", img: Memo5 },
    { name: "Note6", img: Memo6 },
  ];

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
              {noteItemList.map((list) => (
                <label key={list.name}>
                  <input
                    type="radio"
                    value={list.name}
                    checked={focusNote === `${list.name}`}
                    onChange={onClickRadio}
                  />
                  <img src={list.img} />
                </label>
              ))}
            </Notes>
          </NoteList>

          <Link to="/WriteNotes">
            <button>다음으로</button>
          </Link>
        </Container>
      </ContainerBox>
    </Background>
  );
}
