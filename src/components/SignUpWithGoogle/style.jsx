import styled from 'styled-components';
import fontSizes from 'tokens/fontSizes.mjs';

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
`;
