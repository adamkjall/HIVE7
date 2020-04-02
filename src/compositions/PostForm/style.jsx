import styled from 'styled-components';

export const StyledPostForm = styled.div`
  max-width: 25rem;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;

  .box2 {
    display: grid;
    grid-auto-columns: 1fr 1fr;
    margin: 1rem;
    span {
      padding: 1rem;
    }
  }

  .formcheckbox {
    margin: 1rem;
    display: grid;
    grid-template-columns: 50px auto 30px;
  }
`;
