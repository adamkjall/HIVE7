import { createGlobalStyle } from 'styled-components';

import fontFamilies from 'tokens/fontFamilies.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

export const StyledGlobalStyle = createGlobalStyle`
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
    font-family: ${fontFamilies.fontRegular}, sans-serif;
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
   color:black;
 }
`;
