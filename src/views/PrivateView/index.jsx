import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Page from 'compositions/Page';

import Button from 'components/UI/Button';
import Paragraph from 'components/UI/Paragraph';

const PrivateView = () => (
  <Page metadata={{ title: 'Private view' }}>
    <Paragraph>Vill du verkligen logga ut?</Paragraph>
    <Button as={RouterLink} to="/logout">
      Logout
    </Button>
  </Page>
);

export default PrivateView;
