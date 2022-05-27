import React from "react";
import styled from "styled-components";
import HeadForFont from "./components/HeadForFont";
import Link from "next/link";

const RequestSubmitted = () => {
  const deleteLocalstorage = () => {
    localStorage.clear();
  };
  return (
    <Wrapper>
      <HeadForFont />
      <Header>
        <Logo src="/assets/logo.png" alt="logo" />
      </Header>
      <Container>
        <BackgroundImage src="/assets/submitted-background.png" />
        <Title>Your request has been submitted</Title>
        <SubTitle>We will notify you for further update max 2x24 👌</SubTitle>
        <Link href="/">
          <Button onClick={deleteLocalstorage}>Back to home</Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default RequestSubmitted;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BackgroundImage = styled.img`
  width: 600px;
  margin-bottom: 30px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 75px;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Logo = styled.img`
  height: 64px;
`;

const Title = styled.div`
  font-family: "Krona One", sans-serif;
  font-size: 42px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
  `;

const SubTitle = styled.div`
  margin-bottom: 50px;
  font-family: "Kumbh Sans", sans-serif;
  text-align: center;
  font-size: 24px;
  color: #555870;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.div`
  color: white;
  font-family: "Krona One", sans-serif;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 75px;
  background: #055cc4;
  border-radius: 5px;
  cursor: pointer;
`;
