import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledContainer = styled.div`
  .content {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &.page1 {
      background-image: url('../../src/assets/images/LANDINGPAGE1.jpg');
      background-size: contain;
    }
    &.page2 {
      background-color: green;
    }
    &.page3 {
      background-color: rebeccapurple;
    }
    &.page4 {
      background-color: royalblue;
    }

    .insindeblob {
      position: fixed;
      top: 230px;
      transform: translate(34%);
      text-align: center;
      max-width: 250px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      width: 80%;
      padding-top: 3rem;
      button {
        margin: 0.8rem 0;
      }
    }

    .link-login {
      padding: 0 ${spacing.small};
    }

    .pagnation {
      background: linear-gradient(0deg, #2b5a51 0%, rgba(43, 90, 81, 0) 95.27%);
      padding-bottom: ${spacing.small};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 74px;
      width: 100vw;
      position: fixed;
      bottom: 0;

      .reddot {
        height: 10px;
        width: 10px;
        border-radius: 999rem;
        background-color: ${colors.red};
        margin: 0.5rem;
      }

      .dott {
        height: 10px;
        width: 10px;
        border-radius: 999rem;
        background-color: ${colors.white};
        margin: 0.5rem;
      }
    }
  }
`;
