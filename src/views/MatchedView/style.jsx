import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/spacing.mjs';

export const StyledMatchedwalk = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.tiny} ${spacing.small} ${spacing.small};

  .close-btn {
    align-self: flex-start;
  }

  .content-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    .title {
      font-size: 2rem;
      letter-spacing: -2px;
      font-weight: bold;
      color: ${colors.green};
    }

    .gray {
      color: ${colors.gray2};
      text-align: center;
    }

    .dott {
      background-color: ${colors.green};
      width: 12px;
      height: 12px;
      margin: 0 1rem;
      border-radius: 999rem;
    }

    .matched-avatars {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    }

    .avatar {
      width: 127px;
      height: 127px;
    }
  }

  .hello-btn {
    width: 100%;

    button {
      width: 100%;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;

      .icon {
        margin-right: 0.5rem;
      }
    }
  }
`;
