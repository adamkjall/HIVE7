import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';
import landingimg4 from '../../assets/images/landingpage4.jpg';

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${landingimg4});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .white {
    color: white;
    text-align: center;
    &.or {
      font-family: ${fontFamilies.fontLight};
      letter-spacing: 1px;
      margin: 0 1rem 1rem;
      font-size: ${fontSizes.m};
    }
    &.link {
      position: relative;
      top: -1rem;
      font-size: ${fontSizes.s};
      span {
        font-weight: bold;
        border-bottom: white 2px solid;
      }
    }
  }
  h1 {
    color: white;
    font-size: 2.5rem;
  }
  .form-in-middle {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;

    .input-in-middle {
      width: 90vw;
      margin: 0 auto 0;
      max-width: 315px;

      label {
        font-size: ${fontSizes.s};
        color: white;
      }

      .forgotten {
        font-size: ${fontSizes.s};
        color: ${colors.red};
        text-decoration: underline;
        letter-spacing: 0.3px;
        text-align: center;
        position: relative;
        top: -1rem;
      }
    }

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      button {
        margin-bottom: 1rem;
        &.google {
          background: white;
          color: black;
        }
      }
    }
  }
`;
