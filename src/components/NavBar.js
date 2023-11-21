import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import logo from '../assets/img/logo.svg';

const StyledNavbar = styled(Navbar)`
  &.scrolled {
    background-color: red;
  }
  text-align: center;
`;

const StyledNav = styled(Nav)`
  margin-left: auto;
`;

const StyledNavLink = styled(Nav.Link)`
  &.active {
    color: #blue;
  }

  padding: 10px;
`;

const StyledButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  align-items: center;
  background-color: grey
`

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
    <StyledDiv>
      <StyledNavbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <StyledNav className="ms-auto">
              <StyledNavLink href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</StyledNavLink>
              <StyledNavLink href="#painel" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Painel</StyledNavLink>
            </StyledNav>
            <span className="navbar-text">
              <HashLink to='#connect'>
                <StyledButton><span>teste</span></StyledButton>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </StyledDiv>
    </Router>
  )
}

export default NavBar;
