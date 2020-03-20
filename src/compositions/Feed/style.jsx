import styled from 'styled-components';

export const StyledFeed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #dadada;
  background-color: rebeccapurple;
  padding: 2rem;
`;

export const StyledPost = styled.div`
  max-width: 25rem;
  border: 2px solid gray;
  border-radius: 0.4rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.5);

  &:hover {
    filter: brightness(1.1) grayscale(0);
    transform: scale(1.06);
  }

  h3 {
    margin-top: 0.5rem;
  }

  .user {
    margin: 0;
    color: black;
  }
`;

export const StyledPostList = styled.div``;
