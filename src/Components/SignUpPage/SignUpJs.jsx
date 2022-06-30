import React, { useState, useEffect } from "react";
import SignUpVeiw from "./SignUpVeiw";
import { request } from "../../api/api";
export default function SignUpJs() {
  const [checkId, setCheckId] = useState();

  const [checkSubmit, setCheckSubmit] = useState(false);

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

    if (
      name == "userName" ||
      name == "id" ||
      name == "password1" ||
      name == "password2"
    ) {
      value = value.replace(/[\s]/, "");
    }
    if (name == "password1" || name == "password2") {
      console.log(value.match(/[^a-zA-Z0-9~!@#$%^&*()_+<>?:{}\-]/g));
      if (value.match(/[^a-zA-Z0-9~!@#$%^&*()_+<>?:{}\-]/g)) {
        alert("영문, 숫자, 특수문자만 입력이 가능합니다.");
      }
      value = value.replace(/[^a-zA-Z0-9~!@#$%^&*()_+<>?:{}\-]/g, "");
    }
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

  const handlePassword = () => {
    console.log(password1, password2);
    if (password1 !== password2) {
      alert("비밀번호가 동일하지 않습니다.");
      setCheckSubmit(false);
    } else {
      setCheckSubmit(true);
    }
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

  const duplicatecheck = async () => {
    throw new Error("yubin");
    console.log("fsldkjflk");
    const data2 = await request(`/auth/${userName}`, "GET");
  };

  const getRequest = async () => {
    const data = {
      name: userName,
      accountId: id,
      password: password1,
    };

    const data2 = await request("/auth/signup", "POST", data);
    console.log(data2);
  };

  const submit = (e) => {
    getRequest();
  };

  const props = {
    chkvalue,
    duplicatecheck,
    checkspacebar,
    handlePassword,
    handleShowPw1,
    handleShowPw2,
    showPw1,
    showPw2,
    inputValue,
    checkSubmit,
    submit,
  };
  return (
    <>
      <SignUpVeiw {...props} />
    </>
  );
}
