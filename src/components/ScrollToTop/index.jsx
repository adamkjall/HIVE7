import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * This component will scroll to the top of the page when the location change
 * For instance, when a <Link /> (from react-router-dom) is clicked.
 */
const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

ScrollToTop.propTypes = {
  children: PropTypes.node
};

ScrollToTop.defaultProps = {
  children: null
};

export default withRouter(ScrollToTop);
