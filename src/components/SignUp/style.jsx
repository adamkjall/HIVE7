import styled from 'styled-components';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';

export const StyledContainer = styled.div`
  .headcontainer {
    display: grid;
    grid-template-columns: 50px 8fr;
    margin-bottom: 2rem;
    h1 {
      padding-top: 1rem;
    }
  }

  .form-container {
    max-width: 345px;
    display: grid;
    grid-template-columns: 50px 8fr;
    grid-template-rows: 1fr 12px 1fr 12px 1fr 12px 1fr 12px 1fr 2rem;
  }

  .form-container2 {
    max-width: 345px;
    display: grid;
    grid-template-columns: 50px 8fr;
    grid-template-rows: 1fr 12px 1fr 12px 1fr 12px;
  }

  .red {
    position: relative;
    top: -12px;
    color: red;
    height: 30px;
    margin: 0;
  }

  .redlvl {
    position: relative;
    top: 2px;
    color: red;
    height: 30px;
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
    height: 53px;
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
