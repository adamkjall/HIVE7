import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledWalkCard = styled.div`
  margin: 1rem;
  background: ${colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1.8fr;

  .author-data {
    text-align: center;
    background: ${colors.gray5};
    padding: 1rem;
    .avatar {
      border-radius: 999rem;
      width: 48px;
      height: 48px;
      padding: 2px;
      border: 1px solid ${colors.greenDark};
    }
    .author {
      text-align: center;
    }
    .userinfo {
      font-size: ${fontSizes.s};
      .dott {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 999rem;
        background-color: ${colors.greenLight};
        margin: 0 0.5rem;
      }
    }
  }

  .walk-data {
    padding: 1rem;
    display: grid;
    grid-template-columns: 30px 3fr;
  }
`;
