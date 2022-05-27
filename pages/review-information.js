import React from "react";
import styled from "styled-components";
import HeadForFont from "./components/HeadForFont";
import ReviewInformationForm from "./components/review-information/ReviewInformationForm";
import Timeline from "./components/Timeline";

const ReviewInformation = () => {
  return (
    <>
      <HeadForFont />
      <Wrapper>
        <Timeline />
        <ReviewInformationForm/>
      </Wrapper>
    </>
  );
};

export default ReviewInformation;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;