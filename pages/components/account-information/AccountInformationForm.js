import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { timelineItems } from "../../../public/data/timeline-review-items";

const AccountInformationForm = () => {
  const [email, setEmail] = useState("");
  const [countryNumber, setCountryNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const submitHandler = () => {
    if (email === "" || countryNumber === "" || phoneNumber === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      localStorage.removeItem("timeline");
      localStorage.setItem("timeline", JSON.stringify(timelineItems));
      const accountData = [
        {
          account_email: email,
          account_phone: countryNumber.toString() + phoneNumber.toString(),
        },
      ];
      localStorage.setItem("account", JSON.stringify(accountData));
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <FormLabel>Email</FormLabel>
        {isEmpty && email === "" ? (
          <TextError>Email can't be empty!</TextError>
        ) : (
          ""
        )}
        <FormInput
          style={{
            border:
              isEmpty && email === ""
                ? "1px solid red"
                : "1px solid #d6d6d6",
          }}
          placeholder="name@email.com"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel>Phone number</FormLabel>
        {isEmpty && phoneNumber === "" && countryNumber === "" ? (
          <TextError>Phone number can't be empty!</TextError>
        ) : (
          ""
        )}
        <PhoneNumberFormContainer>
          <PhoneSelect
            style={{
              border:
                isEmpty && countryNumber === ""
                  ? "1px solid red"
                  : "1px solid #d6d6d6",
            }}
            onChange={(e) => {
              setCountryNumber(e.target.value);
            }}
          >
            <PhoneOption disabled selected>
              Select
            </PhoneOption>
            <PhoneOption value="62">+62</PhoneOption>
            <PhoneOption value="61">+61</PhoneOption>
            <PhoneOption value="60">+60</PhoneOption>
          </PhoneSelect>
          <FormInput
            placeholder="81395617931"
            type="number"
            style={{
              border:
                isEmpty && phoneNumber === ""
                  ? "1px solid red"
                  : "1px solid #d6d6d6",
              width: "100%",
            }}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </PhoneNumberFormContainer>
          <Link href="/review-information">
            <FormButton onClick={submitHandler}>Next</FormButton>
          </Link>
      </FormContainer>
    </Wrapper>
  );
};

export default AccountInformationForm;

const Wrapper = styled.div`
  background-color: white;
  flex: 3;
  margin-top: 115px;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 0 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    padding: 20px;
  }
`;
const FormLabel = styled.label`
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
`;

const FormInput = styled.input`
  font-family: "Kumbh Sans", sans-serif;
  height: 75px;
  font-size: 16px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  margin: 17px 0 20px 0;
  padding: 0 30px;
`;

const PhoneNumberFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PhoneSelect = styled.select`
  font-family: "Kumbh Sans", sans-serif;
  color: #9090a7;
  height: 75px;
  font-size: 16px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  width: 125px;
  padding: 0 30px;
  margin-right: 20px;
`;

const PhoneOption = styled.option``;

const FormButton = styled.div`
  font-family: "Krona One", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  color: white;
  background-color: #055cc4;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 35px;
  cursor: pointer;
`;
const TextError = styled.div`
  color: red;
`;
