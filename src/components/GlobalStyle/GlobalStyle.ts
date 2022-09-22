import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  body, html {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
    height: 100%;
    font-family: 'Raleway', 'sans-serif';
    color: #1D1F22;
    boxing-size: border-box;
    overflow-y: overlay;
  }
 
  button {
    all: unset;
    cursor: pointer;
  }
  
  p {
    all: unset;
  }
  
  a {
    all: unset;
    cursor: pointer;
  }
`;