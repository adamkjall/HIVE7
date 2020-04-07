import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledWalkCard = styled.div`
  padding: 1rem;
  max-width: 350px;
  margin-bottom: ${spacing.small};
  background: ${colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &:hover {
    filter: brightness(1.1) grayscale(0);
    transform: scale(1.06);
  }

  .author-data {
    display: grid;
    grid-template-areas: 'avatar author' 'avatar usersage';
    grid-auto-columns: 1fr 3fr;
    color: ${colors.black};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1.5px solid ${colors.gray4};
    .avatar {
      grid-area: avatar;
    }
    .author {
      grid-area: author;
      margin: 0;
    }
    .usersage {
      grid-area: usersage;
      font-size: ${fontSizes.s};
    }
  }

  .walk-data {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${colors.gray2};
    font-size: ${fontSizes.m};
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0.5rem 0 0.5rem;
    }
    .duration {
      border-left: 1.5px solid ${colors.gray4};
      border-right: 1.5px solid ${colors.gray4};
    }
  }
`;
