import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-size: 1.6rem;
        font-family: 'Open Sans';
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    *, *::before, *::after  {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

   
`;

export default GlobalStyle;