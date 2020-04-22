import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledMatchedwalk = styled.div`
  .gray {
    color: ${colors.gray2};
    text-align: center;
  }
  .dott {
    background-color: ${colors.red};
    width: 12px;
    height: 12px;
    margin: 1rem;
    border-radius: 999rem;
  }
  .matched-avatars {
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    max-width: 127px;
    border-radius: 50%;
    padding: 0.5rem;
  }
  span {
    padding: 0.4rem;
  }

  .date-time {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .wrapp-button {
    width: 85vw;
    display: flex;
    justify-content: flex-end;
  }
`;
