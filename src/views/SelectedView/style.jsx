import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledSelectedWalk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .gray-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 ${spacing.small};
    background-color: ${colors.gray5};
    width: 100%;

    .head-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;

      .chatbox {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.red};
        border-radius: 999rem;
        position: relative;
        top: 145px;
        left: 45px;
        height: 42px;
        width: 42px;
      }
    }
    .avatar {
      width: 150px;
      height: 150px;
    }

    .dott {
      background-color: ${colors.red};
      width: 5px;
      height: 5px;
      border-radius: 999rem;
      margin: 0.5rem;
      position: relative;
      top: 2px;
    }
    .authordata {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-bottom: 0.1rem;
      margin: ${spacing.tiny} 0 0 0;
      width: 300px;
      border-bottom: solid 1px ${colors.gray3};
    }
    .quote {
      font-size: ${fontSizes.s};
      text-align: center;
      margin-bottom: 0.8rem;
      span {
        margin: 0.3rem;
      }
    }
  }
  .walk-data {
    display: grid;
    grid-template-columns: 50px 1fr;
    row-gap: 10px;
    width: 300px;
    padding: 1rem 0;
    img {
      justify-self: center;
    }
    p {
      margin: 0;
    }
  }

  .walk-data2 {
    display: grid;
    grid-template-columns: 50px 1fr 40px;
    width: 300px;
    row-gap: 10px;
    border-top: 1.5px solid ${colors.gray4};
    padding: 1rem 0;
    margin-bottom: 6rem;
    img {
      justify-self: center;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    button {
      position: fixed;
      bottom: 1rem;
      width: 90%;
      margin: 5vw;
      z-index: 99999999;
    }
  }
`;

export const StyledMap = styled.div`
  width: 100%;
  height: auto;
`;
