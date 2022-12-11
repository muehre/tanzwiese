import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  html, body {
    background: #2b214c;
    background: linear-gradient(90deg, #221d46, #2b214c);
    color: #ffffff;
    font-family: 'Lato', -apple-system,  sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    overscroll-behavior: none;
  }
  
  h1, h2, h3, h4, h5, p {
    font-weight: 300;
    display: flex;
    margin: ${({theme}) => theme.spacing(1)};
    margin-bottom: ${({theme}) => theme.spacing(2)};
    line-height: 1.5;
  }

  a {
    color: ${({theme}) => theme.palette.primary.main};
    text-dcoration: none;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  h3 {
    font-size: 1.4rem;
  }
  
  h4 {
    font-size: 1.2rem;
  }
  
  h5 {
    font-size: 1rem;
  }
`;
 
export default GlobalStyles;