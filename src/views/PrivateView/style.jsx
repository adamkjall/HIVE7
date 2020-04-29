import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledPrivate = styled.div`
  .profilebox-1 {
    display: grid;
    grid-template-areas: 'avatar user' 'avatar  usersage' 'changepic .';
    grid-auto-columns: 1fr 2fr;
    grid-auto-rows: 0.8fr 0.2fr 0.2fr;
    padding: ${spacing.tiny} ${spacing.small} 0;
    .avatar {
      grid-area: avatar;

      img {
        width: 92px;
        height: 92px;
        border-radius: 999rem;
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
      display: flex;
      align-items: flex-end;
      margin: ${spacing.tiny} 10px;
    }
    .usersage {
      margin: 0 10px;
      grid-area: usersage;
      font-size: ${fontSizes.s};
      color: ${colors.gray2};
    }
  }

  .waves {
    width: 100%;
  }

  .change-allinfo-wrapper {
    padding: ${spacing.tiny} ${spacing.small};

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
  }
`;
