import styled from 'styled-components';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .red {
    color: red;
  }

  label {
    font-size: ${fontSizes.s};
  }

  .swedish {
    input[type='radio'] {
      margin: 0 0.5rem 0.5rem 0rem;
    }
  }

  p {
    font-size: ${fontSizes.s};
  }

  .gender {
    input[type='radio'] {
      margin: 0 0.5rem 0rem;
    }
  }
  .avatar {
    width: 92px;
    height: 92px;
    border-radius: 999rem;
  }

  .changepic {
    font-size: ${fontSizes.s};
    color: ${colors.gray2};
    cursor: pointer;
    color: ${colors.red};
    text-decoration: underline;
    font-size: ${fontSizes.s};
    text-align: center;
    border: none;
  }
`;
