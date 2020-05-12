import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import fontSize from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';

export const StyledcChooseChatview = styled.div`
  .message-head-container {
    height: 98px;
    h1 {
      background-color: ${colors.gray5};
      padding: ${spacing.small} ${spacing.small};
      margin: 0;
    }
    img {
      position: relative;
      top: -7px;
      width: 100%;
    }
  }
  .search-div {
    margin: ${spacing.small} ${spacing.small};
    border: ${colors.gray4} solid 1px;
    border-radius: 10px;
    padding: 10px;
    img {
      padding: 0 10px 3px 0;

    }
    input[type='text']{
      border: none;
      ::placeholder {
      color: ${colors.gray3};
      font-family: ${fontFamilies.fontLight};
      font-size: 1rem;
      
      }
    }
  }
  .list-mess {
    padding: 0 ${spacing.small};
    .comp-mess {
      display: grid;
      grid-template-areas: 'avatar user .' 'avatar mess date';
      grid-auto-columns: 0.7fr 3fr 1fr;
      grid-auto-rows: 0.8fr 0.3fr;
      margin: 1rem 0;
      cursor: pointer;

      .avatar {
        grid-area: avatar;
        height: 100%;
        width: 45px;

        &.border {
          border: 3px solid ${colors.orange};
        }
      }

      .name {
        grid-area: user;
        font-size: ${fontSize.m};
        margin-left: .5rem;

        &.bold {
          font-weight: bold; /* ${fontWeights.bold}; finns ingen bold */
        }
      }
      .date {
        grid-area: date;
        justify-self: end;
        font-size: ${fontSize.s};
        color: ${colors.gray2};
      }
      .mess {
        grid-area: mess;
        font-size: ${fontSize.s};
        color: ${colors.gray2};
        margin-left: .5rem;
        margin-top: .1rem;

        &.bold {
          font-weight: bold; /* ${fontWeights.bold}; finns ingen bold */
          color: ${colors.black};
        }
      }
    }
  }
`;
