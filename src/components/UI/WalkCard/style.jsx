import styled from 'styled-components';

import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledWalkCard = styled.div`
  max-height: 12rem;
  max-width: 420px;
  width: 100%;
  background: ${colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(122px, 1fr) 1.8fr;

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: ${colors.gray5};
    padding: 1rem 0.5rem 1rem;
    font-size: ${fontSizes.s};

    .matched {
      .avatars {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        margin-bottom: 0.3rem;
        /* padding: 0 0.3rem; */

        .avatar {
          width: 50px;
          height: 50px;
          &:first-child {
            margin-right: 0.5rem;
          }
        }
      }

      .title {
        display: block;
        font-size: ${fontSizes.m};
        line-height: 1.3rem;
        margin-bottom: 0.3rem;
      }
    }

    & > span {
      padding: 0.2rem 0;
    }

    .avatar {
      width: 60px;
      height: 60px;
      padding: 3px;
      margin-bottom: 0.2rem;

      &.border {
        border: 1px solid ${colors.greenDark};
      }

      &.small {
        width: 50px;
        height: 50px;
      }
    }

    .author {
      text-align: center;
      font-size: ${fontSizes.m};
      margin-top: 0;
    }

    .small-text {
      font-size: ${fontSizes.microcopy};
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
    font-size: ${fontSizes.s};
    padding: 1rem;
    display: grid;
    grid-template-columns: 30px 3fr;
    .quote {
      margin: 3px 5px 0;
    }
    .italic {
      font-style: italic;
    }
  }
`;
