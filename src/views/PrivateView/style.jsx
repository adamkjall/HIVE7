import styled from 'styled-components';

export const StyledPrivate = styled.div`
  max-width: 25rem;
  border-radius: 1rem;
  padding: 1rem;

  .box1 {
    display: grid;
    grid-template-areas: 'avatar user' 'changepic usersage';
    grid-auto-columns: 1fr 2fr;
    padding: 1rem 0;
    .avatar {
      grid-area: avatar;
    }
    .changepic {
      grid-area: changepic;
      margin: 0;
    }
    .user {
      grid-area: user;
      margin: 0;
    }
    .usersage {
      grid-area: usersage;
    }
  }
`;