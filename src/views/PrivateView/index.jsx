import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

import Page from 'compositions/Page';

import Button from 'components/UI/Button';
import Paragraph from 'components/UI/Paragraph';

const PrivateView = () => {
  const { user } = useContext(AuthenticationContext);
  console.log(user);

  return (
    <Page metadata={{ title: 'Private view' }}>
      <h3>{user.displayName}</h3>
      {user.email}
      <Paragraph>Vill du verkligen logga ut?</Paragraph>
      <Button as={RouterLink} to="/logout">
        Logout
      </Button>
    </Page>
  );
};

export default PrivateView;
