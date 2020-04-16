import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
  color: ${colors.black};
  background-color: ${colors.white};
`;

export const StyledModalHeader = styled.div`
  width: 100%;
  font-size: ${fontSizes.h2};
  padding: 0 1rem;
`;

export const StyledModalContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 8%;
  text-align: center;

  .title {
  }

  .notification-text {
    margin: 0 1rem;
  }

  .waves {
    margin-left: calc(50% - 50vw);
    width: 100vw;
    max-width: none;
    overflow: hidden;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 2fr 1fr 2fr;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;

  .avatar {
    width: 100%;
    border-radius: 50%;
  }

  .dot {
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${colors.orange};
    border-radius: 50%;
  }
`;

export const StyledTimeAndPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-top: 1rem;
  }

  .divider {
    width: 20%;
    border-bottom: 1px solid #9b9b9b;
  }
`;
