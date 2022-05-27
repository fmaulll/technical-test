import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Link from "next/link";

const ReviewInformationForm = () => {
  const [owner, setOwner] = useState([])
  const [business, setBusiness] = useState([])
  const [account, setAccount] = useState([])

  useEffect(()=>{
    const ownerString = localStorage.getItem('owner')
    const businessString = localStorage.getItem('business')
    const accountString = localStorage.getItem('account')
    setOwner(JSON.parse(ownerString))
    setBusiness(JSON.parse(businessString))
    setAccount(JSON.parse(accountString))
  }, [])

  return (
    <>
      <Wrapper>
        <FormContainer>
          <Label>Owner information</Label>
          {owner.map((data, index)=>(

          <InformationContainer key={index}>
            <InformationItem>
              <InformationTitle>Owner Information</InformationTitle>
              <InformationData>{data.owner_name}</InformationData>
            </InformationItem>
            <InformationItem>
              <InformationTitle>Owner email</InformationTitle>
              <InformationData>{data.owner_email}</InformationData>
            </InformationItem>
            <InformationItem>
              <InformationTitle>Owner phone number</InformationTitle>
              <InformationData>{data.owner_phone}</InformationData>
            </InformationItem>
            <InformationTitle style={{ borderBottom: 'none' }}>Owner identity card</InformationTitle>
            <ImageContainer>
              <ImageData src="/assets/image.png" />
            </ImageContainer>
          </InformationContainer>
          ))}

          <Label style={{ marginTop: '30px' }}>Business information</Label>
          {business.map((data, index)=>(

          <InformationContainer key={index}>
            <InformationItem>
              <InformationTitle>Business Information</InformationTitle>
              <InformationData>{data.business_name}</InformationData>
            </InformationItem>
            <InformationItem>
              <InformationTitle>Business phone number</InformationTitle>
              <InformationData>{data.business_phone}</InformationData>
            </InformationItem>
            <InformationItem>
              <InformationTitle>Country, State, City</InformationTitle>
              <InformationData>{data.business_country}, {data.business_state}, {data.business_city}</InformationData>
            </InformationItem>
            <InformationItem>
              <InformationTitle>Complete address</InformationTitle>
              <InformationData>{data.business_address}</InformationData>
            </InformationItem>
            <InformationTitle style={{ borderBottom: 'none' }}>Business profile picture</InformationTitle>
            <ImageContainer>
              <ImageData src="/assets/image.png" />
            </ImageContainer>
          </InformationContainer>
          ))}

          <Label style={{ marginTop: '30px' }}>Account information</Label>
          {account.map((data,index)=>(

          <InformationContainer style={{ marginBottom: '70px' }} key={index}>
            <InformationItem>
              <InformationTitle>Email</InformationTitle>
              <InformationData>{data.account_email}</InformationData>
            </InformationItem>
            <InformationItem>
              <InformationTitle>Phone number</InformationTitle>
              <InformationData>{data.account_phone}</InformationData>
            </InformationItem>
          </InformationContainer>
          ))}
          <Link href="/request-submitted">
            <FormButton>Next</FormButton>
          </Link>
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default ReviewInformationForm;

const Wrapper = styled.div`
  background-color: white;
  flex: 3;
  overflow-y: scroll;
  height: 928px;
  @media (max-width:768px){
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
  @media (max-width: 768px){
    margin: 0;
    width: 100%;
    padding: 20px;
  }
`;

const Label = styled.label`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InformationItem = styled.div`
  width: 100%;
  display: flex;
`;
const InformationTitle = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 0 16px 25px;
  flex: 1;
  border: 1px solid #d6d6d6;
`;

const InformationData = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 16px;
  padding: 16px 0 16px 25px;
  flex: 1;
  border: 1px solid #d6d6d6;
`;

const ImageContainer = styled.div`
  border: 1px solid #d6d6d6;
  border-top: none;
  flex: 1;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageData = styled.img``;

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
