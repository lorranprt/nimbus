import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import logo from '../assets/img/logo.png';

const StyledNavbar = styled(Navbar)`
  &.scrolled {
    background-color: red;
  }
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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
              <StyledNavLink href="#painel" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Painel</StyledNavLink>
            </StyledNav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </StyledDiv>
    </Router>
  )
}

export default NavBar;
