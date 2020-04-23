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

  .red {
    position: relative;
    top: -12px;
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
  .reddott {
    position: relative;
    left: 15px;
    top: 35px;
    width: 15px;
    height: 15px;
    border-radius: 999rem;
    background-color: ${colors.red};
    border: 3px ${colors.red} solid;

    .done {
      background-color: white;
    }
  }
  .redline {
    width: 2px;
    height: 53px;
    background-color: ${colors.red};
    position: relative;
    left: 21px;
    top: -22px;
  }
`;
