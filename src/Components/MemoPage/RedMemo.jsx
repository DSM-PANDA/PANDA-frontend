import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContainerBox from "../ContainerBox";
import Background from "../UserPage/Background";
import Memo2 from "../../img/Memos/Memo2.png";

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
  img {
    position: absolute;
    width: 1000px;
    height: 600px;
  }

  textarea {
    position: absolute;
    margin-top: 30px;
    padding: 0 0;
    width: 310px;
    height: 260px;
    resize: none;
    border: none;
    outline: none;
    background-color: #ff889c;
    font-size: 18px;
  }
  textarea::-webkit-scrollbar {
    width: 12px;
  }
  textarea::-webkit-scrollbar-thumb {
    background-color: #f24662;
    border-radius: 10px;
    background-clip: padding-box;
    box-shadow: inset 0px 0px 3px #e70f33;
  }
  textarea::-webkit-scrollbar-track {
    background-color: #ffc5cf;
    border-radius: 10px;
    box-shadow: inset 0px 0px 3px #ff889c;
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
    left: 15%;
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

function RedMemo() {
  const [whiteList, setWhiteList] = useState([]);
  const [whiteMemo, setWhiteMemo] = useState([]);

  const onChangeInput = (e) => {
    setWhiteMemo(e.target.value);
  };

  useEffect(() => {
    console.log(whiteList);
  }, [whiteList]);

  const onClickAddButton = () => {
    const nextList = [
      ...whiteList,
      {
        id: whiteList.length,
        whiteMemo,
      },
    ];
    setWhiteList(nextList);
  };

  return (
    <Background>
      <ContainerBox>
        <Elements>
          <h1>USER</h1>
          <img src={Memo2} alt="" />
          <textarea type="text" onChange={onChangeInput} />
          <Button>
            <Link to="/NameInput">
              <button id="btn1" onClick={onClickAddButton}>
                다음으로
              </button>
              <button id="btn2" onClick={onClickAddButton}>
                다음으로
              </button>
            </Link>
          </Button>
        </Elements>
      </ContainerBox>
    </Background>
  );
}

export default RedMemo;
