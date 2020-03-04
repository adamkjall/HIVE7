import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ fullScreen }) => (fullScreen ? '100vh' : 'auto')};

  img {
    animation: ${spin} infinite forwards 1s;
    width: 100%;
  }
`;
