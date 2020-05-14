import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import fontSize from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledHeader = styled.div`
  height: 65px;

  .head-chat-info {
    background: ${colors.gray5};
    padding: ${spacing.tiny} 0;

    .backbutton {
      padding: ${spacing.small};
    }

    .avatar {
      width: 34px;
      height: 34px;
      margin-right: 1rem;
      object-fit: cover;
    }
  }

  img.waves {
    z-index: 3;
    position: relative;
    top: -8px;
    width: 100%;
  }
`;

export const StyledChatview = styled.div`
  height: 100%;

  .sendbox-wrapper {
    width: 100%;
    padding: ${spacing.tiny};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    background: ${colors.gray5};

    .sendbox {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 60px;
      grid-template-rows: 28px;

      .input-mess {
        padding: 0 0.8rem;
        background: ${colors.gray4};
        border-radius: 999rem;
        border: none;
        outline: none;
      }

      button {
        margin-left: 0.5rem;
        border: none;
        background: none;
        padding: 0;
      }
    }
  }
`;

export const StyledMessage = styled.div`
  padding: ${spacing.tiny} ${spacing.small} 0;

  .timebox {
    font-size: ${fontSize.microcopy};
    width: fit-content;
    min-width: 20%;
    max-width: 60%;
    padding: 0 ${spacing.tiny};
    margin: 0 ${spacing.tiny};
    margin-left: ${({ isUserMessage }) => (isUserMessage ? 'auto' : '0')};
    p {
      margin: 0;
    }
  }
  .chat-box {
    width: fit-content;
    min-width: 20%;
    max-width: 60%;
    background: ${({ isUserMessage }) => (isUserMessage ? colors.green : colors.gray5)};
    color: ${({ isUserMessage }) => (isUserMessage ? 'white' : 'black')};
    border-radius: 10px;
    padding: ${spacing.tiny};
    margin: ${spacing.tiny};
    margin-left: ${({ isUserMessage }) => (isUserMessage ? 'auto' : '0')};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .author {
      margin: 0.1rem 0;
      color: ${colors.red};
      font-size: ${fontSize.s};
    }

    .text {
      margin: 0.3rem 0;
      font-size: ${fontSize.s};
    }
  }
`;

export const StyledMessageList = styled.div`
  height: calc(100vh - 65px - 56px);
  position: relative;
  overflow-y: hidden;

  .messages-container {
    height: inherit;
    overflow-y: scroll;
  }
`;

export const StyledFirstPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
  margin: 2rem auto;
  text-align: center;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }

  p {
    color: ${colors.gray3};
    font-size: ${fontSize.s};
    line-height: 1rem;
  }
`;
