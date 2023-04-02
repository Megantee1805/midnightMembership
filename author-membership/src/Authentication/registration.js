import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  background-color: #f0f0f0;
  width: 50%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
  }
`;

const Heading = styled.h1`
  font-size: 64px;
  font-weight: bold;
  color: #00000;
  margin-bottom: 24px;
`;

const SubHeading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #00000;
  margin-bottom: 24px;
`;


function LandingPage() {
    return (
        <Container>
            <LeftSection>
                <Heading>Welcome to our Membership Site</Heading>
                <SubHeading>Join us now and get access to exclusive content!</SubHeading>
            </LeftSection>
            <RightSection>
                <Form>
                    <h2>Sign up</h2>
                    <Input type="text" placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Button>Sign up</Button>
                </Form>
            </RightSection>
        </Container>
    );
}

export default LandingPage;