import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";
import Bamboo from "../img/Bamboo.png";
import Circle1 from "../img/loginCircle1.png";
import Circle2 from "../img/loginCircle2.png";
import axios from "axios";
import { useEffect } from "react";
import { request } from "../api/api";

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
  }
`;

const TextInput = styled.div`
  position: relative;
  width: 400px;
  margin: 0 0;
`;

export default function SignUpPage() {
  const [info, setInfo] = useState("");
  const [inputValue, setInputValue] = useState({
    userName: "",
    id: "",
    password1: "",
    password2: "",
  });

  const { userName, id, password1, password2 } = info;

  const chkvalue = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    //event.preventDefault();
    const { password1, password2 } = inputValue;
    if (password1 !== password2) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }
  };

  const instance = axios.create({
    baseURL: "http://15.165.54.186:8081",
  });

  const getRequest = async () => {
    const data = await request("/auth/signup", "POST", {
      name: "String",
      accountId: "String",
      password: "String",
    });

    setInfo(data);
  };

  useEffect(() => {
    //getRequest(/);
  }, []);

  /*function gapEvent(event) {
    if (event.keyCode === 13 && inputValue === "") {
      alert("내용을 입력해주세요.");
      console.log("sdflsk");
    }
  }

  const change = (e) => {
    setInputValue(e.target.value);
  };*/

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
                  placeholder="영문 소문자 + 숫자를 4~20자 이내로 입력해주세요."
                  onChange={chkvalue}
                />
                <label>아이디</label>
              </TextInput>
              <TextInput>
                <input
                  id="textPassword1"
                  name="Password"
                  autocomplete="off"
                  required
                  minlength="6"
                  maxlength="20"
                  placeholder="영문 소문자 + 숫자를 6~20자 이내로 입력해주세요"
                  onChange={chkvalue}
                />
                <label>비밀번호</label>
              </TextInput>
              <TextInput>
                <input
                  id="textPassword2"
                  name="Password"
                  autocomplete="off"
                  required
                  minlength="6"
                  maxlength="20"
                  placeholder="비밀번호를 다시 입력해주세요."
                  onChange={chkvalue}
                />
                <label>비밀번호 확인</label>
              </TextInput>
            </Input>
            <button id="btn1">대나무 만들기</button>
            {/* <Link to="/MyBamboo"> */}
            <button id="btn2" onClick={onSubmit}>
              대나무 만들기
            </button>
            {/* </Link> */}
          </Elements>
        </Section>
      </ContainerBox>
    </Container>
  );
}
