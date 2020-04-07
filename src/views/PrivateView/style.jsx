import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledPrivate = styled.div`
  max-width: 25rem;
  border-radius: 1rem;
  padding: 1rem;

  .profilebox-1 {
    display: grid;
    grid-template-areas: 'avatar user' 'changepic usersage';
    grid-auto-columns: 1fr 2fr;
    padding: 1rem 0;
    .avatar {
      grid-area: avatar;
      img {
        width: 92px;
        height: 92px;
      }
    }
    .changepic {
      grid-area: changepic;
      margin: 0;
    }
    .user {
      grid-area: user;
      margin: 0;
    }
    .usersage {
      grid-area: usersage;
      font-size: ${fontSizes.s};
      color: ${colors.gray2};
    }
  }
`;
