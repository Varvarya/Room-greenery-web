import React, { useEffect } from 'react';
import {
  Button, Paper, TextField, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from '../styles';

const LoginForm = ({
  values, errors, onChange, login,
}) => {
  const onSubmit = () => {
    login();
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
        variant="filled"
        size="small"
        inputProps={{
          className: classes.input,
          classes: {
            root: classes.input,
            focused: classes.input,
          },
        }}
        InputLabelProps={{ className: classes.label }} // font size of input label
      />
    </div>
  );

  return (
    <Paper
      elevation={16}
      className={classes.loginContainer}
    >
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

LoginForm.propTypes = {
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

LoginForm.defaultProps = {
  errors: {},
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
})(LoginForm);
