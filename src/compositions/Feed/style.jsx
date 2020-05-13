import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledFeed = styled.div`
  height: 100%;
  display: grid;
  align-content: start;
  gap: 1rem;
  padding: 1rem;
  overflow-y: scroll;

  .walk-card:last-child {
    margin-bottom: 5.5rem;
  }
`;

export const StyledGreetingsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 ${spacing.small};

  .title {
    color: ${colors.red};
    margin-bottom: 0.5rem;
  }

  .text {
    font-size: ${fontSizes.s};
    margin-bottom: 1rem;
  }

  .waves {
    margin-bottom: 0.4rem;
  }
`;
