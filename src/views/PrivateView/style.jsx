import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledPrivate = styled.div`
  .profilebox-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3.5rem ${spacing.small} 1rem;
    .avatar {
      width: 100%;
      margin-bottom: 1rem;
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
      cursor: pointer;
      color: ${colors.red};
      text-decoration: underline;
      font-size: ${fontSizes.s};
      text-align: center;
      border: none;
      background-color: ${colors.white};
    }
    .user {
      display: flex;
      align-items: flex-end;
      margin: ${spacing.tiny} 10px;
    }
    .usersage {
      margin: 0 10px;
      font-size: ${fontSizes.s};
      color: ${colors.gray2};
    }
  }

  .change-allinfo-wrapper {
    padding: 0 ${spacing.small};

    .bold {
      font-size: ${fontSizes.s};
      font-weight: bold;
    }
    .changecontainer {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${colors.gray3};
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
    .logut-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      .logut {
        padding: 0;
        font-size: ${fontSizes.s};
        border: none;
        background-color: none;
        background-color: ${colors.white};
      }
    }
  }
`;
