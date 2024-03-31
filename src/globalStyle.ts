import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: #dddd;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
  }
  `;
