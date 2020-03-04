import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledPre = styled.pre`
  margin-top: ${spacing.medium};
  color: ${({ submitted }) => (submitted ? colors.green : colors.gray1)};
`;
