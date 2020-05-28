import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';
import landingimg1 from '../../assets/images/landingpage1.jpg';
import landingimg2 from '../../assets/images/landingpage2.jpg';
import landingimg3 from '../../assets/images/landingpage3.jpg';
import landingimg4 from '../../assets/images/landingpage4.jpg';

export const StyledContainer = styled.div`
  .carousel {
    width: 100%;
    /* max-width: 420px; */
    .content {
      height: 100vh;
      width: 100%;
      display: grid;
      background-size: cover;
      grid-template-rows: 0.8fr 6fr 2fr 0.8fr 1fr;

      &.page1 {
        background-image: url(${landingimg1});
      }
      &.page2 {
        background-image: url(${landingimg2});
      }
      &.page3 {
        background-image: url(${landingimg3});
      }
      &.page4 {
        background-image: url(${landingimg4});
        grid-template-rows: 4fr 4fr 0.8fr 1fr;
      }
      .jump {
        text-align: right;
        color: white;
        text-decoration: underline;
        padding-right: 10px;
        font-size: ${fontSizes.s};
        font-weight: bold;
      }
      .blobb {
        display: flex;
        align-items: center;
        justify-content: center;
        .blobb-img-2 {
          width: 85%;
          max-width: 300px;
        }

        .blob-container {
          position: relative;
        }

        .insindeblob {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          color: ${colors.white};
          position: absolute;
          top: 32%;
          left: -2%;
          width: 100%;

          h1 {
            margin: 0;
            font-size: 42px;
            line-height: 3.6rem;
          }

          .blob-lines {
            margin-bottom: 0.5rem;
          }
          h2 {
            margin: 0;
          }
          .h-name {
            font-family: ${fontFamilies.fontLight};
            padding-right: 3px;
            font-size: 1.13rem;
          }
          p {
            margin: 0;
            font-weight: 300;
            font-size: 11px;
            width: 170px;
            color: ${colors.white};
            text-align: center;
          }
          &.nr1 {
            color: ${colors.greenLight};
            p {
              position: relative;
            }
          }
          &.nr2 {
            top: 28%;
          }
          &.nr3 {
            p {
              color: ${colors.green};
            }
            left: -5%;
            top: 28%;
          }
        }
        &.nr4 {
          flex-direction: column;
          text-align: center;
          justify-content: flex-end;
          color: ${colors.white};
          h1 {
            font-size: 2.5rem;
          }
          p {
            max-width: 300px;
          }
          .italic {
            font-style: italic;
            font-size: ${fontSizes.l};
          }
        }
      }
      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        a {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 0.8rem;
          .landingbutton {
            width: 90%;
          }
        }
        .landingbutton.google {
          width: 90%;
          background: white;
          color: black;
        }
      }

      .link-login {
        display: flex;
        justify-content: center;
        h3 {
          font-size: ${fontSizes.s};
          color: ${colors.white};
          span {
            font-weight: bold;
            text-decoration: underline;
          }
        }
      }

      .pagnation {
        background-position: center bottom;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;

        .reddot {
          height: 10px;
          width: 10px;
          border-radius: 999rem;
          background-color: ${colors.red};
          margin: 0.5rem;
        }

        .dott {
          height: 10px;
          width: 10px;
          border-radius: 999rem;
          background-color: ${colors.white};
          margin: 0.5rem;
        }
      }
    }
  }
`;
