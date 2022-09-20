import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    background: #FFFFFF;
    height: 100%;
    //font-family: "Raleway";
    color: #1D1F22;
  boxing-size: border-box;
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