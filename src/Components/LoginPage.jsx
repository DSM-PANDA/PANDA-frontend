import React from "react";
import styled from "styled-components";
import Bamboo from "../img/Bamboo.png";
import ContainerBox from "./ContainerBox";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4fef9;
  z-index: -2;
`;

const Section = styled.div`
  width: 540px;
  height: 650px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${Bamboo});
    background-repeat: no-repeat;
    background-position: 50% 40%;
    background-size: 420px 420px;
    opacity: 0.3;
    z-index: -1;
  }
`;

const Elements = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 50px;
  }
`;

const Input = styled.div`
  margin-top: 10px;
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
  }
`;

const IdInput = styled.div`
  margin-bottom: 43px;
`;

const PwInput = styled.div`
  margin-bottom: 25px;
`;

const Button = styled.div`
  position: absolute;
  bottom: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    margin-top: 20px;
    width: 390px;
    height: 55px;
    border-radius: 13px;
    border: none;
    background-color: #639a55;
    color: #fff;
  }
`;

function LoginPage() {
  return (
    <Container>
      <ContainerBox>
        <Section>
          <Elements>
            <h1>LOGIN</h1>
            <Input>
              <IdInput>
                <p>ID</p>
                <input type="text" placeholder="ID를 입력해주세요." />
              </IdInput>
              <PwInput>
                <p>PW</p>
                <input type="text" placeholder="PW를 입력해주세요." />
              </PwInput>
            </Input>
            <Button>
              <button>로그인 하기</button>
              <button>회원가입 하기</button>
            </Button>
          </Elements>
        </Section>
      </ContainerBox>
    </Container>
  );
}

export default LoginPage;
