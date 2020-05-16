import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

import location from '../../assets/icons/location.svg';

export const StyledPostForm = styled.div`
  .timeduration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${spacing.medium};

    span {
      position: relative;
      top: -5px;
      padding: 10px;
    }
  }

  .create-new-container {
    padding: ${spacing.tiny} ${spacing.small};
    font-size: ${fontSizes.m};

    .form-box1 {
      position: relative;
      padding: 0 0 ${spacing.tiny} 0;
      display: grid;
      grid-template-columns: 1fr;
      border-bottom: 2px solid ${colors.gray4};
      .form-box1-div {
        display: grid;
        grid-template-columns: 50px 1fr;
        margin: ${spacing.tiny} 0;

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
            background-color: white;
          }
        }

        #time-and-date {
          border: none;
          outline: none;
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
            background-color: white;
          }
        }

        #time-and-date {
          // visibility: hidden;
          border: none;
          outline: none;
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
        height: 100px;
        box-sizing: border-box;
        resize: none;
        outline: none;
      }
    }
    .button-div {
      width: 100%;
      .button-create-walk {
        width: 90%;
        position: fixed;
        bottom: 1rem;
      }
    }
  }
`;

export const StyledAutocompleteList = styled.ul`
  list-style-image: url(${location});
  margin: 0;

  li {
    margin: 0.5rem;
  }
`;
