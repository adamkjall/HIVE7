import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Page from 'compositions/Page';

import H1 from 'components/UI/H1';
import Button from 'components/UI/Button';
import Paragraph from 'components/UI/Paragraph';

const PrivateView = () => (
  <Page metadata={{ title: 'Private view' }}>
    <H1>Private</H1>
    <Paragraph>Wow, you are so much authenticated right now :O</Paragraph>
    <Button as={RouterLink} to="/logout">
      Logout
    </Button>
  </Page>
);

export default PrivateView;
