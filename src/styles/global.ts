import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;   
    background: ${props => props.theme.primary.main};
    color: ${props => props.theme.primary.contrastText};
    font: 400 16px Roboto, sans-serif;
  }
`
