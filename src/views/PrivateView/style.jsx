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
    padding: 1.8rem 0 1rem;

    .uploadfile-wrapper {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 13px;

      input[type='file'] {
        display: none;
      }

      .file-upload {
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;

        .swap-profile-picture {
          color: ${colors.red};
          text-decoration: underline;
          font-size: 12px;
          text-align: center;
        }
      }
    }

    .avatar {
      margin-bottom: 0.5rem;
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
      margin: ${spacing.small} 0 ${spacing.tiny};
      letter-spacing: 0.12rem;
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
        padding: 2px 0 6px;
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
      .menu-btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        display: flex;
        align-items: center;
        justify-content: center;

        .whitebox {
          border-radius: 4px;
          background: white;
          padding: 1rem;
          width: 80%;
          max-width: 25rem;
          min-height: 180px;
          z-index: 4;
          font-size: ${fontSizes.s};
          .superbold {
            font-weight: bold;
            font-size: ${fontSizes.m};
            margin: 0;
          }

          .remove-acc-input {
            padding: 8px;
            border-top: none;
            border-left: none;
            border-right: none;
            border-radius: unset;
          }

          .button-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 2.5rem;

            .warning {
              padding: 0;
              margin-left: 1rem;
              min-height: 2rem;
              color: ${colors.red};
              background: none;
              font-family: ${fontFamilies.fontRegular};
              font-size: ${fontSizes.s};
              font-weight: bold;

              &:hover {
                box-shadow: none;
                transition: 0;
              }

              &.gray {
                color: ${colors.gray2};
              }
            }
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

  .cover {
    object-fit: cover;
  }

  .round {
    border-radius: 999rem;
  }

  .bold {
    font-weight: bold;
  }
`;

export const StyledProgress = styled.div`
  width: 5.7rem;
  height: 5.7rem;
  /*
  * react-circular-progressbar styles
  * All of the styles in this file are configurable!
  */

  .CircularProgressbar {
    /*
    * This fixes an issue where the CircularProgressbar svg has
    * 0 width inside a "display: flex" container, and thus not visible.
    */
    width: 100%;
    /*
    * This fixes a centering issue with CircularProgressbarWithChildren:
    * https://github.com/kevinsqi/react-circular-progressbar/issues/94
    */
    vertical-align: middle;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: ${colors.red};
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: #d6d6d6;
    /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
    stroke-linecap: round;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: ${colors.red};
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .CircularProgressbar .CircularProgressbar-background {
    fill: #d6d6d6;
  }

  /*
  * Sample background styles. Use these with e.g.:
  *
  *   <CircularProgressbar
  *     className="CircularProgressbar-inverted"
  *     background
  *     percentage={50}
  *   />
  */
  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
    fill: ${colors.red};
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
    fill: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
    stroke: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
    stroke: transparent;
  }
`;
