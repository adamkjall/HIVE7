import React from 'react';
import PropTypes from 'prop-types';

import { isDeviceIOS, isDeviceStandalone } from 'helpers/device.mjs';

import {
  StyledInstallBanner,
  StyledInstallBannerContent,
  StyledInstallBannerPointyArrow
} from './style';

const InstallBanner = ({ children, ...props }) => {
  const showInstallBanner = isDeviceIOS() && !isDeviceStandalone();

  return showInstallBanner ? (
    <StyledInstallBanner {...props}>
      <StyledInstallBannerContent>{children}</StyledInstallBannerContent>
      <StyledInstallBannerPointyArrow />
    </StyledInstallBanner>
  ) : null;
};

InstallBanner.propTypes = {
  children: PropTypes.node
};

InstallBanner.defaultProps = {
  children: (
    <React.Fragment>
      Installera denna webbapp på din iPhone genom att klicka på [IKON] och{' '}
      <strong>Add to Homescreen</strong>.
    </React.Fragment>
  )
};

export default InstallBanner;
