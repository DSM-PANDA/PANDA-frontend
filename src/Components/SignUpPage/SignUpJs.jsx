import React, { useState, useEffect } from "react";
import SignUpVeiw from "./SignUpVeiw";
import { request } from "../../api/api";
export default function SignUpJs() {
  const [info, setInfo] = useState("");

  const [showPw1, setShowPw1] = useState({
    type1: "password",
    visible1: false,
  });

  const [showPw2, setShowPw2] = useState({
    type2: "password",
    visible2: false,
  });

  const [inputValue, setInputValue] = useState({
    userName: "",
    id: "",
    password1: "",
    password2: "",
  });

  const { userName, id, password1, password2 } = inputValue;

  //
  const chkvalue = (e) => {
    let { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const checkspacebar = (event) => {
    if (event.keyCode === 32) {
      alert("빈칸은 입력할 수 없습니다.");
    }
  };

  const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("비밀번호 유효성 검사 :: ", regExp.test(e.target.value));
  };

  const handleShowPw1 = () => {
    setShowPw1(() => {
      if (!showPw1.visible1) {
        return { type1: "text", visible1: true };
      }
      return { type1: "password", visible1: false };
    });
  };

  const handleShowPw2 = () => {
    setShowPw2(() => {
      if (!showPw2.visible2) {
        return { type2: "text", visible2: true };
      }
      return { type2: "password", visible2: false };
    });
  };

  const getRequest = async () => {
    const data = await request("/auth/signup", "POST", {
      name: "String",
      accountId: "String",
      password: "String",
    });

    setInfo(data);
  };

  useEffect(() => {
    //getRequest();
  }, []);

  const props = {
    chkvalue,
    checkspacebar,
    handleShowPw1,
    handleShowPw2,
    checkPassword,
    showPw1,
    showPw2,
    inputValue,
  };
  return (
    <>
      <SignUpVeiw {...props} />
    </>
  );
}
