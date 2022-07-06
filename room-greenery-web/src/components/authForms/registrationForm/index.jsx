import React from 'react';
import {
  Button, Paper, TextField, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert, AlertTitle } from '@mui/material';
import { useHistory } from 'react-router-dom';
import useStyles from '../styles';
import { loginUser } from '../../../store/modules/auth/actionsCreator';

const RegistrationForm = ({
  values, errors, onChange, login,
}) => {
  // const [isVisible, setIsVisible] = React.useState(false);
  const [alertText, setAlertText] = React.useState('');

  const history = useHistory();

  const onSubmit = () => {
    if (Object.keys(errors).length === 0) {
      login(values).then((res) => {
        console.log(res);
        setAlertText('Success');
      });
    }
  };

  const classes = useStyles();

  const inputField = (label, value, onEdit, error) => (
    <div className={classes.inputContainer}>
      <TextField
        className={classes.input}
        label={label}
        name={label}
        value={value}
        onChange={(event) => onEdit(label, event.target.value)}
        helperText={error}
        error={error !== undefined}
        variant="outlined"
        size="small"
      />
    </div>
  );

  const redirect = () => (
    <div className={classes.redirectContainer}>
      <p className={classes.redirectText}>
        Aleady have an account?
      </p>
      <a className={classes.link} href="/">Log in here</a>
    </div>
  );

  return (
    <Paper
      elevation={16}
      className={classes.loginContainer}
    >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {alertText}
        <strong>check it out!</strong>
      </Alert>
      <Typography className={classes.header}>Login</Typography>
      <div className={classes.form}>
        {inputField('Name', values.name, onChange, errors.name)}
        {inputField('Surname', values.surname, onChange, errors.surname)}
        {inputField('Email', values.email, onChange, errors.email)}
        {inputField('Password', values.password, onChange, errors.password)}
        <Button
          className={classes.button}
          type="submit"
          onClick={onSubmit}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </Paper>
  );
};

RegistrationForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

RegistrationForm.defaultProps = {
  errors: {},
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  login: loginUser,
})(RegistrationForm);
