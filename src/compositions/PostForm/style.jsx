import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';

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

  .create-new-container {
    padding: ${spacing.tiny} ${spacing.small};
    font-size: ${fontSizes.m};

    .form-box1 {
      position: relative;
      padding: 0 0 ${spacing.tiny} 0;
      display: grid;
      grid-template-columns: 1fr;
      border-bottom: 2px solid ${colors.gray4};
      label {
        display: grid;
        grid-template-columns: 50px 1fr;
        margin: ${spacing.tiny} 0;
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
      padding: ${spacing.small} 0;
      border-bottom: 2px solid ${colors.gray4};
    }
    .form-box3 {
      padding: ${spacing.tiny} 0;
    }
  }
`;
