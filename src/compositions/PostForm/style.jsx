import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

export const StyledPostForm = styled.div`
  position: relative;

  .new-walk {
    position: sticky;
    top: 0;
    z-index: 4;
  }
  .red {
    font-size: ${fontSizes.microcopy};
    height: 12px;
    padding: 0;
    margin: 0;
    position: relative;
    top: 0px;
    left: 3rem;
    max-width: 220px;
    &.last {
      left: -1rem;
    }
  }
  .timeduration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${spacing.medium};

    label {
      display: flex;
      align-items: center;
      margin: 0.3rem 0;

      &:first-of-type {
        margin-top: 1rem;
      }
    }

    .radio-button {
      display: inline-block;
      height: 20px;
      width: 20px;
      border-radius: 999rem;
      background: white;
      border: ${colors.red} solid 1px;
      margin-right: 0.5rem;

      &::before {
        content: ' ';
      }

      &::after {
        content: ' ';
      }

      &.checked {
        background: ${colors.red};
      }

      input[type='radio'] {
        position: absolute;
        left: -9999px;
      }

      .radio-label {
        position: relative;
        top: -5px;
        padding: 10px;
      }
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
        margin: 0.3rem 0;

        img {
          justify-self: center;
        }
      }

      .when {
        .container {
          position: relative;
          pointer-events: none;

          /* make the native arrow invisible and stretch it over the whole field so you can click anywhere in the input field to trigger the native datepicker*/
          input[type='datetime-local']::-webkit-calendar-picker-indicator,
          input[type='datetime-local']::-webkit-calendar-picker-indicator {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: auto;
            height: auto;
            color: transparent;
            background: transparent;
          }

          .title {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            pointer-events: none;
            background-color: ${colors.white};
          }
        }

        #time-and-date {
          border: none;
          outline: none;
          opacity: 0;
        }
      }

      .where-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99999999999999999999;
        background-color: ${colors.white};
        overflow-y: hidden;

        .where-header {
          display: flex;
          justify-content: space-between;
          padding: ${spacing.tiny} ${spacing.small};
        }

        .where-main {
          padding: 0 ${spacing.small} ${spacing.tiny} ${spacing.small};
          height: calc(100% - 97px);

          #where {
            border-top: none;
            border-left: none;
            border-right: none;
            border-radius: unset;
          }

          .autocomplete-wrapper {
            height: calc(100% - 43px);
            overflow-y: hidden;
          }
        }
      }
    }

    .form-box2 {
      padding: ${spacing.small} 0 0;
      border-bottom: 2px solid ${colors.gray4};
    }
    .form-box3 {
      display: grid;
      grid-template-columns: 50px 1fr;
      margin: ${spacing.small} 0;
      img {
        justify-self: center;
        padding-top: 3px;
      }
      .greeting {
        font-size: ${fontSizes.m};
        font-family: ${fontFamilies.fontRegular}, 'Verdana';
        border: none;
        width: 100%;
        max-width: 290px;
        height: 100px;
        box-sizing: border-box;
        resize: none;
        outline: none;
      }
    }
  }
`;

export const StyledAutocompleteList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  /* overflow-y: scroll; */
  height: 100%;
  overflow-y: scroll;

  li {
    display: flex;
    flex-wrap: nowrap;
    margin: 0.5rem;

    img {
      margin-right: ${spacing.small};
    }

    .result-container {
      /* display: block; */

      .gray {
        color: ${colors.gray3};
      }
    }
  }
`;
