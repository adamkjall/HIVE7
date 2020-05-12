import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import landingimg1 from '../../assets/images/LANDINGPAGE1.jpg';
import landingimg2 from '../../assets/images/LANDINGPAGE14.jpg';
import landingimg3 from '../../assets/images/LANDINGPAGE9.jpg';
import landingimg4 from '../../assets/images/LANDINGPAGE6.jpg';

export const StyledContainer = styled.div`
  .carousel {
    .content {
      height: 100vh;
      width: 100vw;
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
          top: 150px;
          width: 100%;
          p {
            font-size: ${fontSizes.s};
            max-width: 200px;
            text-align: center;
          }
        }
      }
      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
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
        h2 {
          font-size: ${fontSizes.s};
          color: ${colors.white};
        }
      }

      .pagnation {
        background: linear-gradient(0deg, #2b5a51 0%, rgba(43, 90, 81, 0) 95.27%);
        background-position: center bottom;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100vw;

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
