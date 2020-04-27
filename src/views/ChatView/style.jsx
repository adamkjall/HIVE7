import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import fontSize from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledChatview = styled.div`
  .chattbox {
    background: ${colors.gray5};
    border-radius: 10px;
    padding: ${spacing.tiny};
    margin: ${spacing.tiny};

    .timeposted {
      font-size: ${fontSize.s};
    }

    .author {
      color: ${colors.red};
      font-size: ${fontSize.s};
    }

    .mess {
    }
  }
`;
