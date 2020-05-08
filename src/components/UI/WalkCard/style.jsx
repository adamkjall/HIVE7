import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledWalkCard = styled.div`
  background: ${colors.white};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1.8fr;

  .author-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    background: ${colors.gray5};
    padding: 1rem;
    font-size: ${fontSizes.s};

    & > span {
      padding: 0.2rem 0;
    }

    .avatar {
      border-radius: 999rem;
      width: 60px;
      height: 60px;
      padding: 3px;
      margin-bottom: 0.2rem;
      border: 1px solid ${colors.greenDark};
    }

    .author {
      text-align: center;
      font-size: ${fontSizes.m};
    }

    .dott {
      display: block;
      flex-shrink: 1;
      width: 4px;
      height: 4px;
      border-radius: 999rem;
      background-color: ${colors.green};
    }
  }

  .walk-data {
    font-size: ${fontSizes.m};
    padding: 1rem;
    display: grid;
    grid-template-columns: 30px 3fr;
  }
`;
