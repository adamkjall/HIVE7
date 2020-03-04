import React from 'react';

import Page from 'compositions/Page';
import H1 from 'components/UI/H1';
import Paragraph from 'components/UI/Paragraph';

const MyView = () => (
  <Page metadata={{{ js "title: 'MyView', description: 'Lorem ipsum dolor sit amet'" }}}>
    <H1>MyView</H1>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  </Page>
);

export default MyView;
