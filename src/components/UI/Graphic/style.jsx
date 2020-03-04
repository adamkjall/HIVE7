import styled from 'styled-components';

export const StyledGraphicWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
`;

export const StyledGraphic = styled.img`
  display: inline-flex;
  width: 50%;
`;
