import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    transition: all 0.3s;
  }
`;

export default GlobalStyle;
