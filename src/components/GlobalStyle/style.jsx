import { createGlobalStyle } from 'styled-components';
import colors from 'tokens/colors.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

export const StyledGlobalStyle = createGlobalStyle`
  @font-face {
    font-display: ${({ fontDisplay }) => fontDisplay};
    font-family: "${fontFamilies.light}";
    font-weight: ${fontWeights.regular};
    src: url('https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap');
  }
  
  html {
    font-size: 16px;
    min-height: 100vh;
  }

  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fontFamilies.fontRegular}, 'Verdana';
    font-weight: ${fontWeights.fontRegular};
  }

  #root {
    min-height: 100vh;
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

 .box2 {
    display: grid;
    grid-auto-columns: 1fr 1fr;
    margin: 1rem;
    span {
      padding: 1rem;
    }
  }

  hr {
    border: 1.2px solid ${colors.gray4};
  }
    
  .red {
    color: ${colors.red};
  }

  .avatar {
    border-radius: 50%;
    padding: 0.5rem;
  }
`;
