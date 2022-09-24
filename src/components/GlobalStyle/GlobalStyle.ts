import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 #root {
   max-width: 1440px;
   margin: 0 auto;
 }  
 
  body, html {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
    height: 100%;
    font-family: 'Raleway', 'sans-serif';
    color: #1D1F22;
    box-sizing: border-box;
    overflow-y: overlay;
  }

  button, h2 {
    all: unset;
    cursor: pointer;
  }
  
  p {
    all: unset;
    white-space: pre-wrap;
  }
  
  a {
    all: unset;
    cursor: pointer;
  }
`;