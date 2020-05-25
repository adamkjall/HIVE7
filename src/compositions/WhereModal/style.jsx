import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999999;
  color: ${colors.black};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing.tiny} ${spacing.small};
`;

export const StyledModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: ${fontSizes.h2};

  h1 {
    margin: 0;
  }

  .close {
    cursor: pointer;
  }
`;

export const StyledModalContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  flex-grow: 1;

  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: unset;
  }

  .results-wrapper {
    height: calc(100% - 65px);
  }
`;

export const StyledAutocompleteList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 4rem;
  height: 100%;
  overflow-y: scroll;

  li {
    display: flex;
    flex-wrap: nowrap;
    margin: 0.5rem;

    img {
      margin-right: ${spacing.small};
    }

    .result {
      /* display: block; */

      .gray {
        color: ${colors.gray3};
      }
    }
  }
`;
