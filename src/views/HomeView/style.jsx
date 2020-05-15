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
    max-width: 420px;
    .content {
      height: 100vh;
      width: 100%;
      display: grid;
      background-size: cover;
      grid-template-rows: 6fr 2fr 0.8fr 1fr;

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
      }
      .blobb {
        max-width: 420px;
        display: flex;
        align-items: center;
        justify-content: center;
        .insindeblob {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          color: ${colors.white};
          position: fixed;
          top: 18%;
          width: 100%;
          h1 {
            margin: 0;
            font-size: 3.125rem;
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
            font-size: 0.94rem;
            max-width: 190px;
            text-align: center;
          }
          &.nr1 {
            color: ${colors.greenLight};
            p {
              position: relative;
              top: -10px;
            }
          }
          &.nr2 {
            color: ${colors.green};
            top: 22%;
            left: -20px;
          }
          &.nr3 {
            top: 20%;
          }
        }
        &.nr4 {
          flex-direction: column;
          text-align: center;
          color: ${colors.white};
          p {
          max-width 240px;
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
        .landingbutton {
          width: 90%;
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
        background: linear-gradient(0deg, #2b5a51 0%, rgba(43, 90, 81, 0) 95.27%);
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
