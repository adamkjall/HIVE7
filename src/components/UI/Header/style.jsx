import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

export const StyledHeader = styled.div`
  padding: ${spacing.tiny} ${spacing.small};
  min-height: 3rem;
  max-width: 420px;
  border: 0;
  border-radius: 999rem;
  font-family: 'Londrina Solid', cursive;
  letter-spacing: 1px;
  font-size: ${fontSizes.m};
  text-decoration: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: 0.1s;
  width: 100vw;

  .headcontainer {
    background-color: ${colors.gray5};
    display: grid;
    grid-template-columns: 50px 8fr;
    height: 84px;
    h1 {
      text-align: center;
      position: relative;
      left: 18vw;
      width: 140px;
      padding-top: 1rem;
    }
    margin: 0;
  }

  .waves {
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    top: -7px;
  }
`;
