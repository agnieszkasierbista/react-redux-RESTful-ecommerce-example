import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 #root {
   max-width: 1240px;
   position: relative;
   margin: 0 auto;
   background-position: center;
   box-sizing: border-box;
 }  
 
  body, html {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
    font-family: 'Raleway', 'sans-serif';
    color: #1D1F22;
  }

  body {
    overflow-y: scroll;
  }
  
  button, a  {
    all: unset;
    cursor: pointer;
  }
  
  p {
    all: unset;
    white-space: pre-wrap;
  }
  
  h2 {
    all: unset;
  }
`;