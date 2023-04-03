import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LandingPage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const SignupLogin = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 16px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 16px;
  border: none;
  border-radius: 4px;
  background-color: #0066ff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0052cc;
  }
`;

const LandingPageContent = () => {
  return (
    <LandingPage>
      <div>
      <h1>Welcome To Midnight World</h1>
      <br></br>
      <p>Step into a world of wonders and imagination</p>
      <p>Read deeply immersive worlds that are brought to life</p>
      <p>Participate in their creation</p>
      </div>
    </LandingPage>
  );
};

const SignupLoginContent = () => {
  return (
    <SignupLogin>
      <FormContainer>
        <Title>Log in</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Log in</Button>
        <Link to="/signup"> Register</Link>
      </FormContainer>
    </SignupLogin>
  );
};

const Homepage = () => {
  return (
    <Container>
      <LandingPageContent />
      <SignupLoginContent />
    </Container>
  );
};

export default Homepage;
