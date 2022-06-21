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

  const checkPassword = () => {
    if (password1 || password2 !== /[a-z|A-Z|0-9|~!@#$%^&*()_+|<>?:{}]/) {
      // alert("영문, 숫자, 특수문자만 입력할 수 있습니다.");
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
    checkPassword,
    handleShowPw1,
    handleShowPw2,
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
