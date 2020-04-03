import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledWalkCard = styled.div`
  padding: 1rem;
  width: 85vw;
  max-width: 350px;
  margin-bottom: ${spacing.small};
  background: ${colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &:hover {
    filter: brightness(1.1) grayscale(0);
    transform: scale(1.06);
  }

  .box1 {
    display: grid;
    grid-template-areas: 'avatar author' 'avatar usersage';
    grid-auto-columns: 1r 2fr;
    .avatar {
      grid-area: avatar;
    }
    .author {
      grid-area: author;
      margin: 0;
    }
    .usersage {
      grid-area: usersage;
    }
  }
  .posted {
    color: gray;
    font-style: italic;
    font-size: 0.7rem;
  }

  .box2 {
    display: grid;
    grid-auto-columns: 1fr 1fr;
    span {
      padding: 1rem;
    }
  }
`;
