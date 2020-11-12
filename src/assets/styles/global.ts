import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    --color-background: #F0000;
    --font-roboto:16px "Roboto Slab", serif;


    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }


  body {
    background: var(--color-background);
    color: #FFF;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: var(--font-roboto);
  }

  button {
    cursor: pointer;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight:500;
  }

`;
