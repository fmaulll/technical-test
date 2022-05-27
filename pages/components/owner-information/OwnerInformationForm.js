import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { timelineItems } from "../../../public/data/timeline-business-items";

const OwnerInformationForm = () => {
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [countryNumber, setCountryNumber] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const submitHandler = () => {
    if (
      ownerName === "" ||
      ownerEmail === "" ||
      ownerPhone === "" ||
      countryNumber === ""
    ) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      localStorage.removeItem("timeline");
      localStorage.setItem("timeline", JSON.stringify(timelineItems));
      const ownerData = [
        {
          owner_name: ownerName,
          owner_email: ownerEmail,
          owner_phone: countryNumber.toString() + ownerPhone.toString(),
        },
      ];
      localStorage.setItem("owner", JSON.stringify(ownerData));
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <FormLabel>Owner full name</FormLabel>
        {isEmpty && ownerName === "" ? (
          <TextError>Owner full name can't be empty!</TextError>
        ) : (
          ""
        )}
        <FormInput
          style={{
            border:
              isEmpty && ownerName === ""
                ? "1px solid red"
                : "1px solid #d6d6d6",
          }}
          placeholder="John Doe"
          type="text"
          onChange={(e) => {
            setOwnerName(e.target.value);
          }}
        />
        <FormLabel>Owner email</FormLabel>
        {isEmpty && ownerEmail === "" ? (
          <TextError>Owner email can't be empty!</TextError>
        ) : (
          ""
        )}
        <FormInput
          style={{
            border:
              isEmpty && ownerEmail === ""
                ? "1px solid red"
                : "1px solid #d6d6d6",
          }}
          placeholder="name@email.com"
          type="email"
          onChange={(e) => {
            setOwnerEmail(e.target.value);
          }}
        />
        <FormLabel>Owner phone number</FormLabel>
        {isEmpty && ownerPhone === "" && countryNumber === "" ? (
          <TextError>Owner phone & country number can't be empty!</TextError>
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
            placeholder="Select"
            onChange={(e) => {
              setCountryNumber(e.target.value);
            }}
          >
            <PhoneOption selected disabled>
              Select
            </PhoneOption>
            <PhoneOption value="62">+62</PhoneOption>
            <PhoneOption value="61">+61</PhoneOption>
            <PhoneOption value="60">+60</PhoneOption>
          </PhoneSelect>
          <FormInput
            style={{
              border:
                isEmpty && ownerPhone === ""
                  ? "1px solid red"
                  : "1px solid #d6d6d6",
              width: "100%",
            }}
            placeholder="81395617931"
            type="number"
            onChange={(e) => {
              setOwnerPhone(e.target.value);
            }}
          />
        </PhoneNumberFormContainer>
        <FormLabel>Owner identity card</FormLabel>
        <ImageInput type="image" src="/assets/image.png" alt="Image" />
        <Link href="/business-information">
          <FormButton onClick={submitHandler}>Next</FormButton>
        </Link>
      </FormContainer>
    </Wrapper>
  );
};

export default OwnerInformationForm;

const Wrapper = styled.div`
  background-color: white;
  flex: 3;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 0 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
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

const ImageInput = styled.input`
  width: 100%;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  height: 195px;
  padding: 85px 400px;
  margin: 17px 0 20px 0;
  @media (max-width: 768px) {
    padding: 75px 150px;
  }
`;
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
  cursor: pointer;
`;

const TextError = styled.div`
  color: red;
`;
