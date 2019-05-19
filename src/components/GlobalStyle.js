import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
       font-family: 'Nanum Gothic', sans-serif;
       font-size: 1rem;
       color: #424242;
       background-color: #fafafa;
    }
`;

export default GlobalStyle;
