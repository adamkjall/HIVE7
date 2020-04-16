import styled from 'styled-components';

import Box from 'components/UI/Box';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';

export const StyledDialog = styled(Box)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 40rem;
  z-index: 999;
  box-sizing: border-box;
  color: ${colors.black};
  background-color: ${colors.greenLight};
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
