import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

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
