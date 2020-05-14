import { createGlobalStyle } from 'styled-components';
import colors from 'tokens/colors.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

export const StyledGlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
 html {
    min-height: 100vh;
    width: 100vw;
    font-size: 16px;
  }

  @font-face {
    font-display: ${({ fontDisplay }) => fontDisplay};
    font-family: 'Inter', sans-serif;
    font-weight: ${fontWeights.fontRegular};
    src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  }

  @font-face {
    font-display: ${({ fontDisplay }) => fontDisplay};
    font-family: 'Londrina Solid', cursive;
    font-weight: ${fontWeights.fontLight};
    src: url('https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap');
  }

  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fontFamilies.fontRegular}, verdana;
    font-weight: ${fontWeights.fontLight};
  }

  #root {
    font-family: ${fontFamilies.fontRegular}, verdana;
  }

  img {
    max-width: 100%;
  }

  .no-js img.lazyload {
    display: none;
  }

  .map {
    position: relative;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

 a {
   text-decoration:none;
   color:${colors.black};
 }

  hr {
    border: 1.2px solid ${colors.gray4};
  }

  .red {
    color: ${colors.red};
  }

  .avatar {
    border-radius: 999rem;
    max-width: 93px;
  }

  ::placeholder {
    color: black;
    opacity: 1;
  }
  
  input[type='radio'] {
      cursor: pointer;
      position: relative;
      height: 20px;
      width: 20px;
      border-radius: 999rem;
      border: ${colors.red} solid 5px;
      outline: none !important;
      
      &::before {
        position: relative;
        display: block;
        content: '';
        background: white;
        border: ${colors.red} solid 1px;
        border-radius: 999rem;
        height: 20px;
        width: 20px;
      }
      &:checked::before {
        content: url("data:image/svg+xml;charset=UTF-8,<svg height='100' width='100'><circle cx='10' cy='10' r='10' stroke='black' stroke-width='3' fill='blue' /></svg>");
        background: ${colors.red};
        height: 20px;
        width: 20px;
      }

    }

    .reddott {
      width: 15px;
      height: 15px;
      border-radius: 999rem;
      border: 3px ${colors.red} solid;
      background-color: white; 
    }

    .donedott {
    width: 15px;
    height: 15px;
    border-radius: 999rem;
    border: 3px ${colors.red} solid;
    background-color: ${colors.red};
    }

`;
