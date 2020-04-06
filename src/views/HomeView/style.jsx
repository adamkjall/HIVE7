import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .buttons {
    display: flex;
    flex-direction: column;

    button {
      margin: 0.8rem 0;
    }
  }
`;
