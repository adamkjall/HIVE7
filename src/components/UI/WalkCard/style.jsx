import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledWalkCard = styled.div`
  padding: 1rem;
  max-width: 355px;
  margin-bottom: ${spacing.small};
  background: ${colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  .author-data {
    display: grid;
    grid-template-areas: 'avatar author' 'avatar userinfo';
    grid-auto-columns: 1fr 3fr;
    grid-auto-rows: 1.4fr 1fr;
    color: ${colors.black};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1.5px solid ${colors.gray4};
    .avatar {
      grid-area: avatar;
      border-radius: 999rem;
      width: 69px;
      padding: 0.5rem 0.8rem;
    }
    .author {
      grid-area: author;
      padding-top: 0.5rem;
      margin: 0;
    }
    .userinfo {
      grid-area: userinfo;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${colors.gray2};
    font-size: ${fontSizes.s};
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0.5rem 0 0.5rem;
      img {
        padding-bottom: 0.5rem;
      }
    }
    .duration {
      border-left: 1.5px solid ${colors.gray4};
      border-right: 1.5px solid ${colors.gray4};
    }
  }
`;
