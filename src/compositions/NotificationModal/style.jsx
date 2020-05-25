import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import spacing from 'tokens/spacing.mjs';

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
