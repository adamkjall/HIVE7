import styled from 'styled-components';

export const StyledFeed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const StyledPost = styled.div`
  max-width: 25rem;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

  &:hover {
    filter: brightness(1.1) grayscale(0);
    transform: scale(1.06);
  }

  .box1 {
    display: grid;
    grid-template-areas: 'avatar author' 'avatar usersage';
    grid-auto-columns: 1r 2fr;
    .avatar {
      grid-area: avatar;
    }
    .author {
      grid-area: author;
      margin: 0;
    }
    .usersage {
      grid-area: usersage;
    }
  }
  .posted {
    color: gray;
    font-style: italic;
    font-size: 0.7rem;
  }

  .box2 {
    display: grid;
    grid-auto-columns: 1fr 1fr;
    margin: 1rem;
    span {
      padding: 1rem;
    }
  }
`;

export const StyledPostList = styled.div``;
