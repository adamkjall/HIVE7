import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Head from 'components/Head';
import ErrorBoundary from 'components/ErrorBoundary';

import { StyledContentWrapper } from './style';

const Page = ({ location, metadata, ...props }) => (
  <ErrorBoundary>
    <Head {...metadata} url={location.pathname} />
    <StyledContentWrapper {...props} />
  </ErrorBoundary>
);

Page.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  // optional props forwarded to the <Head /> component
  metadata: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string,
      width: PropTypes.integer,
      height: PropTypes.integer
    }),
    lang: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
  })
};

export default withRouter(Page);
