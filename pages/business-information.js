import React from "react";
import styled from "styled-components";
import BusinessInformationForm from "./components/business-information/BusinessInformationForm";
import Timeline from "./components/Timeline";
import HeadForFont from "./components/HeadForFont";

const BusinessInformation = () => {
  return (
    <>
    <HeadForFont />
    <Wrapper>
      <Timeline />
      <BusinessInformationForm />
    </Wrapper>
    </>
  );
};

export default BusinessInformation;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
