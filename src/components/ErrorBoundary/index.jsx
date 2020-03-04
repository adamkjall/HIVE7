import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Alert from 'components/UI/Alert';
import Paragraph from 'components/UI/Paragraph';
import H1 from 'components/UI/H1';

import { StyledErrorBoundary } from './style';

/**
 * ErrorBoundary: safeguard your application from unexpected errors
 *
 * This React feature integrates nicely with error-reporting tools such as sentry.io.
 * If you wish to set something up, this is the place!
 * Example with sentry.io: https://docs.sentry.io/platforms/javascript/react/
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
      // eventId: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      error
    };
  }

  // Enable this if you use an error reporting tool such as Sentry
  componentDidCatch(error, errorInfo) {
    /* eslint-disable-next-line no-console */
    console.error('Error catched by ErrorBoundary', error, errorInfo);
    // Sentry.withScope(scope => {
    //   scope.setExtras(errorInfo);
    //   const eventId = Sentry.captureException(error);
    //   this.setState({
    //     eventId
    //   });
    // });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    return error ? (
      <StyledErrorBoundary>
        <H1>Oops...</H1>
        <Paragraph>This is really unfortunate, but a component failed to render...</Paragraph>
        <Alert status="error" size="medium">
          <p>{error.message}</p>
          {/* <button onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report error</button> */}
        </Alert>
        <Link to="/">Back to home page</Link>
      </StyledErrorBoundary>
    ) : (
      children
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;
