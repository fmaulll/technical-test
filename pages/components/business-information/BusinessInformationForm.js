import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { timelineItems } from "../../../public/data/timeline-account-items";
import useMediaQuery from "../hooks/useMediaQuery";

const BusinessInformationForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [countryNumber, setCountryNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const submitHandler = () => {
    if (
      businessName === "" ||
      businessPhone === "" ||
      countryNumber === "" ||
      country === "" ||
      state === "" ||
      city === "" ||
      businessAddress === ""
    ) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      localStorage.removeItem("timeline");
      localStorage.setItem("timeline", JSON.stringify(timelineItems));
      const businessData = [
        {
          business_name: businessName,
          business_phone: countryNumber.toString() + businessPhone.toString(),
          business_country: country,
          business_state: state,
          business_city: city,
          business_address: businessAddress,
        },
      ];
      localStorage.setItem("business", JSON.stringify(businessData));
    }
  };

  return (
    <>
      <Wrapper>
        <FormContainer>
          <FormLabel>Business name</FormLabel>
          {isEmpty && businessName === "" ? (
            <TextError>Business name can't be empty!</TextError>
          ) : (
            ""
          )}
          <FormInput
            style={{
              border:
                isEmpty && businessName === ""
                  ? "1px solid red"
                  : "1px solid #d6d6d6",
            }}
            placeholder="RM. Makmur Bahagia"
            type="text"
            onChange={(e) => {
              setBusinessName(e.target.value);
            }}
          />
          <FormLabel>Business phone number</FormLabel>
          {isEmpty && businessPhone === "" && countryNumber === "" ? (
            <TextError>Business phone can't be empty!</TextError>
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
              <FormOption selected disabled>
                Select
              </FormOption>
              <FormOption value="62">+62</FormOption>
              <FormOption value="61">+61</FormOption>
              <FormOption value="60">+60</FormOption>
            </PhoneSelect>
            <FormInput
              style={{
                border:
                  isEmpty && businessPhone === ""
                    ? "1px solid red"
                    : "1px solid #d6d6d6",
                width: "100%",
              }}
              placeholder="81395617931"
              type="number"
              onChange={(e) => {
                setBusinessPhone(e.target.value);
              }}
            />
          </PhoneNumberFormContainer>
          <LocationContainer>
            <LocationFormContainer>
              <FormLabel>Country</FormLabel>
              {isEmpty && country === "" && state === "" && city === "" ? (
                <TextError>Country, state and city can't be empty!</TextError>
              ) : (
                ""
              )}
              <LocationSelect
                style={{
                  border:
                    isEmpty && country === ""
                      ? "1px solid red"
                      : "1px solid #d6d6d6",
                }}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              >
                <FormOption selected disabled>
                  Select
                </FormOption>
                <FormOption value="Indonesia">Indonesia</FormOption>
                <FormOption value="Australia">Australia</FormOption>
                <FormOption value="Malaysia">Malaysia</FormOption>
              </LocationSelect>
            </LocationFormContainer>
            <LocationFormContainer
              style={{
                marginLeft: isMobile ? "0" : "30px",
              }}
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <FormLabel>Province / State</FormLabel>
              <LocationSelect
                style={{
                  border:
                    isEmpty && state === ""
                      ? "1px solid red"
                      : "1px solid #d6d6d6",
                }}
              >
                <FormOption selected disabled>
                  Select
                </FormOption>
                <FormOption value="Jawa Barat">Jawa Barat</FormOption>
                <FormOption value="Jawa Tengah">Jawa Tengah</FormOption>
                <FormOption value="Jawa Timur">Jawa Barat</FormOption>
              </LocationSelect>
            </LocationFormContainer>
            <LocationFormContainer
              style={{
                marginLeft: isMobile ? "0" : "30px",
              }}
            >
              <FormLabel>City</FormLabel>
              <LocationSelect
                style={{
                  border:
                    isEmpty && state === ""
                      ? "1px solid red"
                      : "1px solid #d6d6d6",
                }}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                <FormOption selected disabled>
                  Select
                </FormOption>
                <FormOption value="Jakarta">Jakarta</FormOption>
                <FormOption value="Bogor">Bogor</FormOption>
                <FormOption value="Bandung">Bandung</FormOption>
              </LocationSelect>
            </LocationFormContainer>
          </LocationContainer>
          <FormLabel>Complete address</FormLabel>
          {isEmpty && businessAddress === "" ? (
            <TextError>Owner full name can't be empty!</TextError>
          ) : (
            ""
          )}
          <FormInput
            style={{
              border:
                isEmpty && businessAddress === ""
                  ? "1px solid red"
                  : "1px solid #d6d6d6",
            }}
            placeholder="Type complete address"
            type="text"
            onChange={(e) => {
              setBusinessAddress(e.target.value);
            }}
          />
          <FormLabel>PIN location</FormLabel>
          <FormInput placeholder="Type complete address" type="text" />
          <FormLabel>Business profile picture</FormLabel>
          <ImageInput type="image" src="/assets/image.png" alt="Image" />
          <Link href="/account-information">
            <FormButton onClick={submitHandler}>Next</FormButton>
          </Link>
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default BusinessInformationForm;

const Wrapper = styled.div`
  background-color: white;
  flex: 3;
  overflow-y: scroll;
  height: 928px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const FormContainer = styled.div`
  height: max-content;
  margin: 120px 0;
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
  height: 75px;
  font-size: 16px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  width: 125px;
  padding: 0 30px;
  margin-right: 20px;
  color: #9090a7;
`;

const FormOption = styled.option``;

const ImageInput = styled.input`
  width: 100%;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  height: 195px;
  padding: 85px 390px;
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
  margin-top: 35px;
  cursor: pointer;
`;

const LocationContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LocationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LocationSelect = styled.select`
  margin: 17px 0 20px 0;
  font-family: "Kumbh Sans", sans-serif;
  height: 75px;
  font-size: 16px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  width: 100%;
  padding: 0 30px;
  color: #9090a7;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const TextError = styled.div`
  color: red;
`;
