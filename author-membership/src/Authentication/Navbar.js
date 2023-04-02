import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
`;

const NavLink = styled.a`
  color: #333;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const LoginButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #333;
    border: 1px solid #333;
  }
`;

const NavbarComponent = () => {
  return (
    <Navbar>
      <Logo href="/">My Website</Logo>
      <NavLinks>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/works">Works</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/videos">Videos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/podcast">Podcast</NavLink>
        </NavItem>
        <NavItem>
          <LoginButton href="/login">Login</LoginButton>
        </NavItem>
      </NavLinks>
    </Navbar>
  );
};

export default NavbarComponent;