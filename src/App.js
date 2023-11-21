import NavBar from './components/NavBar';
import { Footer } from "./components/Footer";
import React from 'react';
import styled from 'styled-components'

import 'leaflet/dist/leaflet.css';

const StyledDiv = styled.div`
  background-color: pink;
  color: white;
  padding: 10px 10px;
  border: none;

`;

const Styledp = styled.p`
  background-color: red;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <StyledDiv>
        <h1 className=''>
          Nimbus Meteorologia
        </h1>
        <spanStyled>
          <Styledp>LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL</Styledp>
        </spanStyled>
      </StyledDiv>
      <Footer />
    </div>
  );
}

export default App;