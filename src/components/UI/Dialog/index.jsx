import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/UI/Button';

import { StyledDialog, StyledDialogHeader, StyledDialogContent } from './style';

const Dialog = ({ children, closeButtonLabel, onClose, ...props }) => (
  <StyledDialog {...props}>
    <StyledDialogHeader>
      <Button onClick={onClose}>{closeButtonLabel}</Button>
    </StyledDialogHeader>
    <StyledDialogContent>{children}</StyledDialogContent>
  </StyledDialog>
);

Dialog.propTypes = {
  children: PropTypes.node,
  closeButtonLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClose: PropTypes.func
};

Dialog.defaultProps = {
  closeButtonLabel: 'Close'
};

export default Dialog;
