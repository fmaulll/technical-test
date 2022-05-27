import React from 'react'
import Link from "next/link";
import styled from "styled-components";
import HeadForFont from "./components/HeadForFont";
import { timelineItems } from "./data/timeline-owner-items";

export default function Home() {
  const nextButtonHandler = () => {
    localStorage.setItem("timeline", JSON.stringify(timelineItems));
  };
  return (
    <>
      <HeadForFont />
      <Wrapper>
        <Header>
          <Logo src="/assets/logo.png" alt="logo" />
          <BackLink>Back to main page</BackLink>
        </Header>
        <HeroContainer>
          <Title>Tired of the old way of selling online</Title>
          <SubTitle>
            Try BIG Tenant, feel the new experience of online selling in virtual
            world, Register, earn money, and let's get rich!
          </SubTitle>
          <Link href="/owner-information">
            <Button onClick={nextButtonHandler}>Register now</Button>
          </Link>
        </HeroContainer>
        <CartImage src="/assets/cart-image.png" />
        <CashImage src="/assets/cash-image.png" />
        <ProfileContainer>
          <ProfileImage src="/assets/profile-image.png" />
          <ProfileItems>
            <ProfileTitle>New order</ProfileTitle>
            <ProfileName>Jaydon Curtis</ProfileName>
          </ProfileItems>
        </ProfileContainer>
        <IncomeContainer>
          <IncomeTitle>Total income</IncomeTitle>
          <IncomeBalance>Rp. 3.500.000</IncomeBalance>
        </IncomeContainer>
        <PhoneOne src="/assets/02.png" />
        <PhoneTwo src="/assets/3.png" />
        <BackgroundImage src="/assets/background.png" alt="background" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 75px;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Logo = styled.img`
  height: 64px;
`;

const BackLink = styled.div`
  font-family: "Krona One", sans-serif;
  letter-spacing: -2px;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
`;

const Title = styled.div`
  font-family: "Krona One", sans-serif;
  letter-spacing: -4px;
  width: 610px;
  text-align: center;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 350px;
  }
`;

const SubTitle = styled.div`
  line-height: normal;
  font-size: 1rem;
  font-family: "Kumbh Sans", sans-serif;
  width: 490px;
  text-align: center;
  margin: 15px 0;
  color: #9090a7;
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 300px;
  }
`;

const Button = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Krona One", sans-serif;
  font-size: 16px;
  width: 180px;
  height: 55px;
  color: white;
  background-color: #055cc4;
  border-radius: 8px;
  cursor: pointer;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 700px;
  bottom: 0;
  @media (max-width: 768px) {
    width: 400px;
  }
`;

const PhoneOne = styled.img`
  z-index: 1;
  height: 250px;
  position: absolute;
  left: 50%;
  bottom: 10%;
  @media (max-width: 768px) {
    height: 200px;
    right: 50%;
    bottom: 10%;
  }
`;

const PhoneTwo = styled.img`
  z-index: 1;
  height: 330px;
  position: absolute;
  right: 48%;
  bottom: 0;
  @media (max-width: 768px) {
    height: 250px;
    right: 40%;
    bottom: 0;
  }
`;

const CartImage = styled.img`
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  position: absolute;
  left: 28%;
  bottom: 35%;
  padding: 25px;
  background-color: white;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CashImage = styled.img`
  z-index: 1;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  position: absolute;
  right: 31%;
  bottom: 22%;
  padding: 25px;
  @media (max-width: 768px) {
    z-index: 2;
    right: 10%;
    bottom: 5%;
  }
`;

const ProfileImage = styled.img`
  margin-right: 10px;
`;

const ProfileContainer = styled.div`
  z-index: 1;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  position: absolute;
  right: 22%;
  bottom: 40%;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 30px;
  @media (max-width: 768px) {
    display: none;
    /* z-index: 2;
    left: 10%;
    bottom: 35%; */
  }
  `;

const ProfileItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;

const ProfileTitle = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 12px;
  `;
const ProfileName = styled.div`
  font-family: "Krona One", sans-serif;
  font-size: 14px;
  `;
const IncomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  position: absolute;
  left: 25%;
  bottom: 18%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 30px;
  @media (max-width: 768px) {
    display: none;
  }
  `;
const IncomeTitle = styled.div`
  font-size: 12px;
  font-family: "Kumbh Sans", sans-serif;
`;

const IncomeBalance = styled.div`
  font-size: 14px;
  font-family: "Krona One", sans-serif;
`;
