import React from "react";
import styled from "styled-components";
import HeadForFont from "./components/HeadForFont";
import OwnerInformationForm from "./components/owner-information/OwnerInformationForm";
import Timeline from "./components/Timeline";

const OwnerInformation = () => {
  return (
    <>
      <HeadForFont />
      <Wrapper>
        <Timeline />
        <OwnerInformationForm />
      </Wrapper>
    </>
  );
};

export default OwnerInformation;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;