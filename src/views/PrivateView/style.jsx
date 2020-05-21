import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

export const StyledPrivate = styled.div`
  .profilebox-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0 1rem;

    .avatar {
      margin-bottom: 1rem;
      width: 5.7rem;
      height: 5.7rem;
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
      outline: none;
    }
    .user {
      display: flex;
      align-items: flex-end;
      margin: ${spacing.tiny} 10px;
    }
    .greendott {
      height: 4px;
      width: 4px;
      border-radius: 999rem;
      background-color: ${colors.greenLight};
      position: relative;
      bottom: 7px;
      margin: 0 0.5rem;
    }
    .usersage {
      margin: 0 10px;
      font-size: ${fontSizes.s};
      color: ${colors.gray2};
      position: relative;
      top: -7px;
    }
  }

  .change-allinfo-wrapper {
    padding: 0 ${spacing.small};

    .bold {
      font-size: ${fontSizes.s};
      font-weight: bold;
      padding: 8px 0 0;
    }
    .changecontainer {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${colors.gray3};
      .display {
        padding: 2px 0 9px;
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
        font-family: ${fontFamilies.fontRegular};
        font-weight: bold;
        border: none;
        background-color: none;
        background-color: ${colors.white};
        outline: none;
      }
      .overlay {
        background: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0px;
        left: 0;
        z-index: 2;
        .whitebox {
          border-radius: 4px;
          background: white;
          margin: 60% 10%;
          padding: 1rem 1rem 0;
          height: 150px;
          width: 80%;
          z-index: 4;
          font-size: ${fontSizes.s};
          .superbold {
            font-weight: bold;
            font-size: ${fontSizes.m};
            margin: 0;
          }
          .warning {
            padding: 0;
            margin: 2px 25px;
            color: ${colors.red};
            background: none;
            font-family: ${fontFamilies.fontRegular};
            font-size: ${fontSizes.s};
          }

          .loader {
            height: 100%;
            width: 100%;
            display: grid;
            place-items: center;
          }
        }
      }
    }
  }
`;
