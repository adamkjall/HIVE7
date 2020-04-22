import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledPrivate = styled.div`
  max-width: 25rem;
  border-radius: 1rem;

  .profilebox-1 {
    display: grid;
    grid-template-areas: 'avatar user' 'avatar  usersage' 'changepic .';
    grid-auto-columns: 1fr 2fr;
    grid-auto-rows: 0.8fr 0.2fr 0.3fr;

    margin: 2rem 0;

    .avatar {
      grid-area: avatar;
      border-radius: 50%;

      img {
        width: 92px;
        height: 92px;
      }
    }
    .changepic {
      text-align: center;
      font-size: ${fontSizes.s};
      color: ${colors.gray2};
      grid-area: changepic;
      cursor: pointer;
      color: ${colors.red};
      text-decoration: underline;
      font-size: ${fontSizes.s};
      text-align: center;
      border: none;
      background-color: ${colors.white};
    }
    .user {
      grid-area: user;
      margin: 8px;
    }
    .usersage {
      margin: 0 10px;
      grid-area: usersage;
      font-size: ${fontSizes.s};
      color: ${colors.gray2};
    }
  }
  .bold {
    font-size: ${fontSizes.m};
    font-weight: bold;
  }
  .changecontainer {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.gray4};
    .display {
      font-size: ${fontSizes.s};
    }
    .change {
      color: ${colors.red};
      font-size: ${fontSizes.s};
      border: none;
      background-color: none;
      background-color: ${colors.white};
    }
  }
  .container-logout {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;
