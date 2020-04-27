import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

export const StyledUpload = styled.div`
  font-size: ${fontSizes.s};
  padding: 0 ${spacing.small};

  .uploadfile-wrapper {
    display: flex;
    justify-content: center;

    input[type='file'] {
      display: none;
    }

    .file-upload {
      border: 1px solid ${colors.gray3};
      cursor: pointer;
      padding: 9px;
      background: ${colors.white};
      font-size: ${fontSizes.s};
    }

    input[type='submit'] {
      border: 1px solid ${colors.gray3};
      background: ${colors.gray4};
      padding: 9px;
      font-size: ${fontSizes.s};
      cursor: pointer;
    }
  }
  .placeholder-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .placeholder {
      max-width: 120px;
      border-radius: 999rem;
      padding-top: 10px;
    }
    button {
      border: 1px solid ${colors.gray3};
      background: ${colors.white};
      padding: 9px;
      font-size: ${fontSizes.m};
    }
  }
  span {
    padding: 0 2rem;
  }
`;
