import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    //margin-left: calc(100vw - 100%);
    //margin-right: 0;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
    height: 100%;
    //font-family: "Raleway";
    color: #1D1F22;
    boxing-size: border-box;
    overflow-y: overlay;
  }
 
  button {
    all: unset;
    cursor: pointer;
  }
  a {
    all: unset;
    cursor: pointer;
  }
`;