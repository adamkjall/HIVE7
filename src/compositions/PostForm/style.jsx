import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSize from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledPostForm = styled.div`
  .headcontainer {
    background-color: ${colors.gray5};
    display: grid;
    grid-template-columns: 50px 8fr;
    h1 {
      padding-top: 1rem;
    }
    margin: 0;
  }

  .waves {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .waves.green {
    background-color: ${colors.gray5};
  }
  .waves.gray {
    position: relative;
    top: -7px;
  }

  .create-new-container {
    padding: ${spacing.tiny} ${spacing.small};

    .form-box1 {
    }
    .form-box2 {
      .formcheckbox {
        margin: 1rem;
        display: grid;
        grid-template-columns: 50px auto 30px;
      }
    }
    .form-box3 {
    }
  }
`;
