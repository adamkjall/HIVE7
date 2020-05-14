import styled from 'styled-components';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledContainer = styled.div`
  .h1-in-center {
    text-align: center;
    color: ${colors.green};
  }

  .signup-form-container {
    margin: 1rem auto 0;
    max-width: 315px;
    display: grid;
    grid-template-columns: 50px 8fr;
    grid-template-rows: 1fr 1px 1fr 1px 1fr 1px 1fr 1px 70px 40px;
  }

  .signup-form-container2 {
    margin: 1rem auto 0;
    max-width: 315px;
    display: grid;
    grid-template-columns: 50px 8fr;
    grid-template-rows: 1fr 12px 1fr 12px 1fr 0.6fr;
  }

  .red {
    font-size: ${fontSizes.microcopy};
    position: relative;
    top: -20px;
    left: 10px;
    color: red;
    height: 1px;
    margin: 0;
  }

  .redlvl {
    position: relative;
    top: 2px;
    color: red;
    height: 20px;
    margin: 0;
  }

  label {
    font-size: ${fontSizes.s};
  }

  .swedish {
    input[type='radio'] {
      margin: 0 0.5rem 0.5rem 0rem;
    }
  }

  p {
    font-size: ${fontSizes.s};
  }

  .gender {
    input[type='radio'] {
      margin: 0 0.5rem 0rem;
    }
  }
  .profilebox-1 {
    .changepic {
      position: relative;
      top: 29px;
      font-size: ${fontSizes.s};
      text-decoration: underline;
      color: ${colors.red};
    }
  }
  .reddott {
    position: relative;
    left: 15px;
    top: 35px;
    width: 15px;
    height: 15px;
    border-radius: 999rem;
    border: 3px ${colors.red} solid;
    background-color: white;
    &.nr2 {
      top: 15px;
    }
  }

  .donedott {
    position: relative;
    left: 15px;
    top: 35px;
    width: 15px;
    height: 15px;
    border-radius: 999rem;
    border: 3px ${colors.red} solid;
    background-color: ${colors.red};
    &.nr2 {
      top: 15px;
    }
  }

  .buttondiv {
    width: 100%;
    display: flex;
    justify-content: center;
    .nextbutton {
      margin: 0 1rem;
    }
  }

  .redline {
    width: 1px;
    height: 50px;
    background-color: ${colors.red};
    position: relative;
    left: 21px;
    top: -24px;
  }

  .redline2 {
    width: 1px;
    height: 83px;
    background-color: ${colors.red};
    position: relative;
    left: 21px;
    top: -75px;
  }

  .uploadfile-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 33px;

    input[type='file'] {
      display: none;
    }

    .file-upload {
      border: none;
      cursor: pointer;
      max-width: 135px;
    }
  }
  .the-bottom-line {
    position: relative;
    top: -40px;
    left: 80px;
  }
`;
