import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Alert from 'components/UI/Alert';
import Button from 'components/UI/Button';

const ServiceWorkerRefreshBanner = ({
  children,
  dismissButtonLabel,
  eventName,
  promptBeforeReloading,
  refreshButtonLabel,
  ...props
}) => {
  const [showRefreshBanner, setShowRefreshBanner] = useState(false);
  const reload = () => {
    window.location.reload();
  };

  useEffect(() => {
    const onServiceWorkerUpdated = () => {
      if (promptBeforeReloading) {
        setShowRefreshBanner(true);
      } else {
        reload();
      }
    };

    window.addEventListener(eventName, onServiceWorkerUpdated);

    return () => {
      window.removeEventListener(eventName, onServiceWorkerUpdated);
    };
  }, [eventName, promptBeforeReloading]);

  return showRefreshBanner ? (
    <Alert {...props}>
      {children}
      <div>
        <Button onClick={reload}>{refreshButtonLabel}</Button>
        <Button onClick={() => setShowRefreshBanner(false)}>{dismissButtonLabel}</Button>
      </div>
    </Alert>
  ) : null;
};

ServiceWorkerRefreshBanner.propTypes = {
  children: PropTypes.node,
  dismissButtonLabel: PropTypes.node,
  promptBeforeReloading: PropTypes.bool,
  eventName: PropTypes.string.isRequired,
  refreshButtonLabel: PropTypes.node
};

ServiceWorkerRefreshBanner.defaultProps = {
  children: <span>Update available</span>,
  dismissButtonLabel: 'Dismiss',
  placement: 'bottom',
  position: 'fixed',
  promptBeforeReloading: true,
  refreshButtonLabel: 'Refresh',
  size: 'small',
  status: 'info'
};

export default ServiceWorkerRefreshBanner;
