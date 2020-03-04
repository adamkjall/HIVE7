import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Page from 'compositions/Page';
import Link from 'components/UI/Link';
import H1 from 'components/UI/H1';
import Paragraph from 'components/UI/Paragraph';

const NotFoundView = () => (
  <Page
    metadata={{
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
      prerenderStatusCode: 404
    }}
  >
    <H1>Page not found</H1>
    <Paragraph>The page you are looking for does not exist.</Paragraph>
    <Link as={RouterLink} to="/">
      Back to home page
    </Link>
  </Page>
);

export default NotFoundView;
