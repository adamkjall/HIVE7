import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import spacing from 'tokens/spacing.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999999;
  overflow: hidden;
  color: ${colors.black};
  background-color: ${colors.white};
  padding: ${spacing.tiny} ${spacing.small} ${spacing.small};

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: scaleUp 0.3s ease-out;
    -webkit-animation: scaleUp 0.3s ease-out;

    @keyframes scaleUp {
      0% {
        transform: scale(0.3);
        -webkit-transform: scale(0.3);
      }
      100% {
        transform: scale(1);
        -webkit-transform: scale(1);
      }
    }
  }

  &.removing {
    animation: scaleDown 0.3s ease-out;
    -webkit-animation: scaleDown 0.3s ease-out;

    @keyframes scaleDown {
      0% {
        transform: scale(1);
        -webkit-transform: scale(1);
      }
      100% {
        transform: scale(0.4);
        -webkit-transform: scale(0.4);
      }
    }
  }

  .hello-btn {
    width: 100%;
    display: block;
    margin-top: auto;

    button {
      width: 100%;
      text-align: center;

      text-transform: uppercase;

      .icon {
        margin-right: 0.7rem;
      }
    }
  }
`;

export const StyledModalHeader = styled.div`
  width: 100%;
  font-size: ${fontSizes.h2};
  .close {
    cursor: pointer;
  }
`;

export const StyledModalContent = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  flex-grow: 1;

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    color: ${colors.green};
    font-weight: ${fontWeights.fontRegular};
    line-height: 1.2;
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  .notification-text {
    margin: 1rem 1rem;
  }

  .waves {
    margin-left: calc(50% - 50vw);
    max-width: none;
    overflow: hidden;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  max-width: 17rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  .avatar {
    width: 115px;
    height: 115px;
  }

  .dot {
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${colors.green};
    border-radius: 50%;
  }
`;

export const StyledCancelModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 9999999999999999;

  .whitebox {
    border-radius: 4px;
    background: white;
    margin: 60% 10%;
    padding: 1rem 1rem 0;
    height: 150px;
    width: 80%;
    z-index: 4;
    font-size: ${fontSizes.s};
    display: flex;
    flex-direction: column;

    animation: scaleUp 0.3s ease-out;
    -webkit-animation: scaleUp 0.3s ease-out;

    @keyframes scaleUp {
      0% {
        transform: scale(0.3);
        -webkit-transform: scale(0.3);
      }
      100% {
        transform: scale(1);
        -webkit-transform: scale(1);
      }
    }

    &.removing {
      animation: scaleDown 0.3s ease-out;
      -webkit-animation: scaleDown 0.3s ease-out;

      @keyframes scaleDown {
        0% {
          transform: scale(1);
          -webkit-transform: scale(1);
        }
        100% {
          transform: scale(0.1);
          -webkit-transform: scale(0.1);
        }
      }
    }

    .superbold {
      font-weight: bold;
      font-size: ${fontSizes.m};
      margin: 0;
    }
    .warning {
      padding: 0;
      margin-left: auto;
      margin-right: 9px;
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
`;
