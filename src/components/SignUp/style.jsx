import styled from 'styled-components';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledContainer = styled.div`
  .headcontainer {
    background-color: ${colors.gray5};
    display: grid;
    grid-template-columns: 50px 8fr;
    h1 {
      padding-top: 1rem;
    }
    margin: 0;
  }

  .waves {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .waves.green {
    background-color: ${colors.gray5};
  }
  .waves.gray {
    position: relative;
    top: -7px;
  }

  .h1-in-center {
    text-align: center;
  }

  .signup-form-container {
    margin: 1rem auto 0;
    max-width: 315px;
    display: grid;
    grid-template-columns: 50px 8fr;
    grid-template-rows: 1fr 8px 1fr 8px 1fr 8px 1fr 8px 70px 10px;
  }

  .signup-form-container2 {
    margin: 1rem auto 0;
    max-width: 315px;
    display: grid;
    grid-template-columns: 50px 8fr;
    grid-template-rows: 1fr 12px 1fr 12px 1fr 12px;
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
  }

  .nextbutton {
    position: relative;
    top: 30px;
  }

  .redline {
    width: 2px;
    height: 50px;
    background-color: ${colors.red};
    position: relative;
    left: 21px;
    top: -22px;
  }

  .redline2 {
    width: 2px;
    height: 83px;
    background-color: ${colors.red};
    position: relative;
    left: 21px;
    top: -52px;
  }
`;
