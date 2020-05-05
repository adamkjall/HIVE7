import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

export const StyledPostForm = styled.div`
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

  .timeduration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${spacing.medium};

    input[type='radio'] {
      cursor: pointer;
      position: relative;
      display: inline-block;
      height: 13px;
      width: 13px;
      border-radius: 999rem;
      border: black solid 1px;
      outline: none !important;
      background-color: ${colors.red};
      &::before {
        position: relative;
        display: block;
        content: '';
        background: white;
        border: black solid 1px;
        border-radius: 999rem;
        height: 15px;
        width: 15px;
      }
      &:checked::before {
        background: ${colors.red};
      }
    }
    span {
      padding: 10px;
    }
  }

  .create-new-container {
    padding: ${spacing.tiny} ${spacing.small};
    font-size: ${fontSizes.m};

    .form-box1 {
      padding: 0 0 ${spacing.tiny} 0;
      display: grid;
      grid-template-columns: 1fr;
      border-bottom: 2px solid ${colors.gray4};
      .form-box1-div {
        display: grid;
        grid-template-columns: 50px 1fr;
        margin: ${spacing.tiny} 0;
      }
    }
    .form-box2 {
      padding: ${spacing.small} 0;
      border-bottom: 2px solid ${colors.gray4};
    }
    .form-box3 {
      display: grid;
      grid-template-columns: 50px 1fr;
      margin: ${spacing.tiny} 0;
      padding: ${spacing.tiny} 0;
      .greeting {
        font-size: ${fontSizes.m};
        font-family: ${fontFamilies.fontRegular}, 'Verdana';
        border: none;
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        resize: none;
      }
    }
  }
`;
