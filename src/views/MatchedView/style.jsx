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
  animation: animate 0.5s ease-out;
  -webkit-animation: animate 0.5s ease-out;

  @keyframes animate {
    0% {
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

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
      /* margin: 0 1rem; */
      border-radius: 999rem;
    }

    .matched-avatars {
      width: 100%;
      max-width: 17rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
    }

    .avatar {
      width: 115px;
      height: 115px;
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
