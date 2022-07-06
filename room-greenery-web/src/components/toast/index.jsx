import React from 'react';

import {
  Info, Check, Warning, Error, BugReport,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@mui/material';
import useStyles from './styles';

export const displayIcon = (type) => {
  switch (type) {
    case 'success':
      return <Check />;
    case 'info':
      return <Info />;
    case 'error':
      return <Error />;
    case 'warning':
      return <Warning />;
    default:
      return <BugReport />;
  }
};

const ToastMessage = ({ type, message }) => {
  const classes = useStyles();

  return (
    <Alert className={classes.container} severity={type}>
      <AlertTitle>{type.toUpperCase()}</AlertTitle>
      {message}
    </Alert>
  );
};

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ToastMessage;
