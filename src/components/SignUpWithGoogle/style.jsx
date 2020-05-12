import styled from 'styled-components';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';

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
    position: relative;
    top: -5px;
  }

  .moreinfo {
    margin: 1.5rem 3rem;
  }

  .signup-form-container {
    margin: 1rem auto 0;
    max-width: 315px;
    display: grid;
    grid-template-columns: 50px 8fr;
    grid-template-rows: 0.5fr 1px 1fr 1px 0.7fr 1px 0.3fr 1px 0.3fr 1px 0.6fr;
  }

  .red {
    font-size: ${fontSizes.microcopy};
    position: relative;
    top: 0px;
    left: 10px;
    color: red;
    height: 1px;
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
  .avatar {
    margin: 1rem;
    width: 92px;
    height: 92px;
    border-radius: 999rem;
  }

  .changepic {
    font-size: ${fontSizes.s};
    color: ${colors.gray2};
    cursor: pointer;
    color: ${colors.red};
    text-decoration: underline;
    font-size: ${fontSizes.s};
    text-align: center;
    border: none;
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

  .redline {
    width: 1px;
    height: 40px;
    background-color: ${colors.red};
    position: relative;
    left: 21px;
    top: -25px;
  }

  .buttondiv {
    width: 100%;
    display: flex;
    justify-content: center;
    .nextbutton {
      margin: 0 1rem;
    }
  }
`;
