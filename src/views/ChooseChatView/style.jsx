import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import fontSize from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledcChooseChatview = styled.div`
  .message-head-container {
    h1 {
      padding: ${spacing.tiny} ${spacing.small};
    }
    img {
      width: 100%;
    }
  }
  .search {
    padding: ${spacing.tiny} ${spacing.small} 0;
  }
  .list-mess {
    padding: 0 ${spacing.small};
    .comp-mess {
      display: grid;
      grid-template-areas: 'avatar user .' 'avatar mess date';
      grid-auto-columns: 0.7fr 3fr 1fr;
      grid-auto-rows: 0.8fr 0.3fr;
      margin: 1rem 0;

      .avatar {
        grid-area: avatar;
        width: 50px;
        height: 50px;
      }
      .name {
        grid-area: user;
        font-size: ${fontSize.m};
      }
      .date {
        grid-area: date;
        font-size: ${fontSize.s};
        color: ${colors.gray2};
      }
      .mess {
        grid-area: mess;
        font-size: ${fontSize.s};
        color: ${colors.gray2};
      }
    }
  }
`;
