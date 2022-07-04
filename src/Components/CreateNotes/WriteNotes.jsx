import React from "react";
import styled from "styled-components";
import ContainerBox from "../common/ContainerBox";
import Background from "../UserPage/Background";
import { RiArrowLeftSLine } from "react-icons/ri";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    position: absolute;
    top: 55px;
    left: 30px;
    margin: 0 0;
  }
`;

const Header = styled.div`
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
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .content {
    width: 75%;
    height: 45%;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    background: #bde5b5;
  }

  textarea {
    width: 92%;
    height: 90%;
    padding: 10px;
    resize: none;
    border: dashed 2px #4a7541;
    border-radius: 5%;
    outline: none;
    font-size: 18px;
    background: #bde5b5;
  }
`;

const SubmitElements = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 385px;
    height: 46px;
    border-radius: 23px;
    border: solid 1px #639a55;
    color: #fff;
    outline: none;
    font-size: 20px;
    text-align: center;
    color: #505050;
    cursor: pointer;
  }

  button {
    width: 390px;
    height: 50px;
    margin-top: 12px;
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

export default function WriteNotes() {
  return (
    <Background>
      <ContainerBox>
        <Wrapper>
          <Header>
            <div className="backArrow">
              <RiArrowLeftSLine />
              <p>이전으로</p>
            </div>
            <h1>메시지를 입력해주세요</h1>
          </Header>

          <Section>
            <div className="content">
              <textarea />
            </div>

            <SubmitElements>
              <input
                type="text"
                placeholder="보내는 사람의 이름을 입력해주세요"
              />
              <button>쪽지 달아주기</button>
            </SubmitElements>
          </Section>
        </Wrapper>
      </ContainerBox>
    </Background>
  );
}
