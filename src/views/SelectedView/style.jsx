import styled from 'styled-components';

export const StyledSelectedWalk = styled.div`
  max-width: 25rem;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

  .box1 {
    display: grid;
    grid-template-areas: 'avatar author' 'avatar usersage';
    grid-auto-columns: 1r 2fr;
    padding: 1rem 0;
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
  .box2 {
    display: grid;
    grid-auto-columns: 1fr 1fr;
    margin: 1rem;
    span {
      padding: 1rem;
    }
  }
`;
