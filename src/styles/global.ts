import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }
  body{
    margin: 0;
    font-family: sans-serif;
    background-color: #000000;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }
`