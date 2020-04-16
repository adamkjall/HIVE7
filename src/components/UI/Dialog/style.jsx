import styled from 'styled-components';

import Box from 'components/UI/Box';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledDialog = styled(Box)`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  color: ${colors.black};
  background-color: ${colors.white};
`;

export const StyledDialogHeader = styled.div`
  width: 100%;
  font-size: ${fontSizes.h2};
`;

export const StyledDialogContent = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;
