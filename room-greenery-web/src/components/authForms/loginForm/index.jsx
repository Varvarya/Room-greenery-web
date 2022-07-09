import React from 'react';
import {
  Button, Paper, TextField, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from '../styles';

const LoginForm = ({
  values, errors, onChange, login,
}) => {
  const onSubmit = () => {
    login();
  };

  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const inputField = (label, key, value, onEdit, error) => (
    <div className={classes.inputContainer}>
      <TextField
        className={classes.input}
        label={label}
        name={label}
        value={value}
        onChange={(event) => onEdit(key, event.target.value)}
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

  const redirect = () => (
    <div className={classes.redirectContainer}>
      <p className={classes.redirectText}>
        {`${t('login.do_not_have_account')}`}
      </p>
      <a className={classes.link} href="/auth/registration">{t('login.register_here')}</a>
    </div>
  );

  return (
    <Paper
      elevation={16}
      className={classes.loginContainer}
    >
      <Typography className={classes.header}>{t('login.login')}</Typography>
      <div className={classes.form}>
        {inputField(`${t('login.name')}`, 'name', values.name, onChange, errors.name)}
        {inputField(`${t('login.surname')}`, 'Surname', values.surname, onChange, errors.surname)}
        {inputField(`${t('login.email')}`, 'Email', values.email, onChange, errors.email)}
        {inputField(`${t('login.password')}`, 'Password', values.password, onChange, errors.password)}
        <Button
          className={classes.button}
          type="submit"
          onClick={onSubmit}
          variant="contained"
        >
          {t('login.submit')}
        </Button>
        {redirect()}
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
