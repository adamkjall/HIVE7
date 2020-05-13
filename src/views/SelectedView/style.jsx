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
    padding: ${spacing.small};
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
      max-width: 150px;
      width: 150px;
    }

    .dott {
      background-color: ${colors.red};
      width: 5px;
      height: 5px;
      border-radius: 999rem;
      margin: 0.5rem;
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
    margin-bottom: 1.6rem;
  }

  .buttons-wrapper {
    display: grid;
  }
`;
