import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --list-bg: #f4f4f4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    background: palegreen;
  }

  body {
    font-size: 16px;
    min-height: 100vh;
    font-family: Roboto, sans-serif;
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(14, 174, 87, 1) 0%, rgba(12, 116, 117, 1) 90%);
  }
`
export default GlobalStyles

export const ModalCardNameButton = styled.button`
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  outline: none;
  border: none;
  background: none;
  &:hover {
    background: #CCCCCC3d;
  }
`