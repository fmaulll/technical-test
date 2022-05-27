import React from "react";
import styled from "styled-components";
import AccountInformationForm from "./components/account-information/AccountInformationForm";
import Timeline from "./components/Timeline";
import HeadForFont from "./components/HeadForFont";

const AccountInformation = () => {
  return (
    <>
      <HeadForFont />
      <Wrapper>
        <Timeline />
        <AccountInformationForm />
      </Wrapper>
    </>
  );
};

export default AccountInformation;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
