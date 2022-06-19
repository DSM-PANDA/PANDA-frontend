import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContainerBox from "../ContainerBox";
import Bamboo from "../../img/Bamboo.png";
import Circle1 from "../../img/loginCircle1.png";
import Circle2 from "../../img/loginCircle2.png";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlash } from "react-icons/bs";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4fef9;
  z-index: 1;

  #Circle1 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 586px;
    height: 418px;
  }

  #Circle2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 523px;
    height: 647px;
  }
`;

const Section = styled.div`
  width: 540px;
  height: 650px;

  &:after {
    content: "";
    position: absolute;
    top: 100px;
    left: 47px;
    width: 450px;
    height: 450px;
    background: url(${Bamboo});
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.3;
    z-index: 2;
  }
`;

const Elements = styled.form`
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 50px;
    margin-bottom: 10px;
  }

  button {
    position: absolute;
    bottom: 35px;
    left: 75px;
    width: 390px;
    height: 60px;
    border-radius: 25px;
    border: none;
    color: #fff;
    font-size: 30px;
  }

  #btn1 {
    background: linear-gradient(126.86deg, #2ea849 29.75%, #82c970 71.43%);
  }

  #btn2 {
    background: #639a55;
    transition: 0.3s;
  }

  #btn2:hover {
    opacity: 0;
    cursor: pointer;
  }
`;

const Input = styled.div`
  z-index: 10;
  margin: 10px 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin: 0 0 17px;
    font-size: 25px;
  }

  input {
    width: 390px;
    height: 35px;
    margin: 0 0 10px 0;
    padding: 50px 10px 0 0;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #608182;
    font-size: 16px;
    color: #000;
    outline: none;
  }
  label {
    position: absolute;
    left: 0px;
    top: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #505050;
    transition: all 0.5s ease;
  }
  span {
    position: absolute;
    left: 40px;
    top: 15px;
    padding: 2px;
    font-size: 16px;
    color: #fff;
    background-color: #639a55;
    border-radius: 3px;
    box-shadow: 1px 1px 1px #608182;
    cursor: pointer;
  }
  #show {
    position: absolute;
    right: 10px;
    bottom: 6px;
    padding: 2px;
    background: none;
    box-shadow: none;
    color: #505050;
    cursor: pointer;
  }
`;

const TextInput = styled.div`
  position: relative;
  width: 400px;
  margin: 0 0;
`;

export default function SignUpPage({
  chkvalue,
  checkspacebar,
  handleShowPw1,
  handleShowPw2,
  checkPassword,
  showPw1,
  showPw2,
  inputValue,
}) {
  return (
    <Container>
      <img id="Circle1" src={Circle1} alt="" />
      <img id="Circle2" src={Circle2} alt="" />
      <ContainerBox>
        <Section>
          <Elements>
            <h1>SINGUP</h1>
            <Input>
              <TextInput>
                <input
                  name="userName"
                  type="text"
                  autocomplete="off"
                  required
                  minlength="1"
                  maxlength="10"
                  placeholder="10자 이내로 입력해 주세요."
                  onChange={chkvalue}
                  onKeyDown={checkspacebar}
                  value={inputValue.userName}
                />
                <label>이름</label>
                <span>중복 확인</span>
              </TextInput>
              <TextInput>
                <input
                  name="id"
                  type="id"
                  autocomplete="off"
                  required
                  minlength="1"
                  maxlength="10"
                  placeholder="10자 이내로 입력해 주세요."
                  onChange={chkvalue}
                  onKeyDown={checkspacebar}
                  value={inputValue.id}
                />
                <label>아이디</label>
              </TextInput>
              <TextInput>
                <input
                  id="textPassword1"
                  name="Password"
                  autocomplete="off"
                  required
                  type={showPw1.type1}
                  minlength="6"
                  maxlength="20"
                  placeholder="영문 + 숫자 + 특수문자를 6~20자 이내로 입력해주세요."
                  onChange={chkvalue}
                  onKeyDown={checkspacebar}
                  onBlur={checkPassword}
                />
                <label>비밀번호</label>
                <p onClick={handleShowPw1}>
                  {showPw1.visible1 ? (
                    <p id="show">
                      <BsEyeSlash />
                    </p>
                  ) : (
                    <p id="show">
                      <IoEyeSharp />
                    </p>
                  )}
                </p>
              </TextInput>
              <TextInput>
                <input
                  id="textPassword2"
                  name="Password"
                  autocomplete="off"
                  required
                  type={showPw2.type2}
                  minlength="6"
                  maxlength="20"
                  placeholder="비밀번호를 다시 입력해주세요."
                  onChange={chkvalue}
                  onKeyDown={checkspacebar}
                  onBlur={checkPassword}
                />
                <label>비밀번호 확인</label>
                <p onClick={handleShowPw2}>
                  {showPw2.visible2 ? (
                    <p id="show">
                      <BsEyeSlash />
                    </p>
                  ) : (
                    <p id="show">
                      <IoEyeSharp />
                    </p>
                  )}
                </p>
              </TextInput>
            </Input>
            <button id="btn1">대나무 만들기</button>
            {/* <Link to="/MyBamboo"> */}
            <button id="btn2">대나무 만들기</button>
            {/* </Link> */}
          </Elements>
        </Section>
      </ContainerBox>
    </Container>
  );
}
