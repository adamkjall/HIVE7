import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import fontSize from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledChatview = styled.div`
  .heigth-countainer {
    .head-chat-info {
      padding-top: ${spacing.small};
      .backbutton {
        padding: ${spacing.small};
      }
      .avatar {
        max-width: 34px;
        max-height: 34px;
      }
      img.waves {
        width: 100%;
      }
    }
    .chattcountainer {
      padding: ${spacing.tiny} ${spacing.small} 0;
      .timeposted {
        font-size: ${fontSize.microcopy};
        margin: ${spacing.tiny};
      }

      .chattbox {
        max-width: 70vw;
        background: ${colors.gray5};
        border-radius: 10px;
        padding: ${spacing.tiny};
        margin: ${spacing.tiny};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        .author {
          margin: 0.1rem 0;
          color: ${colors.red};
          font-size: ${fontSize.s};
        }

        .mess {
          margin: 0.3rem 0;
          font-size: ${fontSize.s};
        }
      }
    }
  }
  .sendbox {
    width: 100%;
    padding: ${spacing.tiny} ${spacing.small} 0;
    background: ${colors.gray4};
    position: fixed;
    bottom: -5px;
    display: grid;
    grid-template-columns: 2fr 0.2fr;

    button {
      border: none;
      background: none;
      padding: 0;
      height: 3rem;
      width: 3rem;
    }
  }
`;
