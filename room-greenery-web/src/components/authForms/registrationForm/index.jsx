import React, { useEffect } from 'react';
import {
  Button, InputLabel, MenuItem, Paper, Select, TextField, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from '../styles';
import { getAllOrganizations } from '../../../store/modules/organizations/actionsCreator';
import { getRolesList } from '../../../store/modules/roles/actionsCreator';

const RegistrationForm = ({
  values, errors, onChange, register, getRoles, getOrganizations, organizations, roles,
}) => {
  useEffect(() => {
    getRoles();
    getOrganizations();
  }, []);

  const { t, i18n } = useTranslation();

  const onSubmit = () => {
    if (Object.keys(errors).length === 0) {
      register(values);
    }
  };

  const classes = useStyles();

  const inputField = (label, key, value, onEdit, error) => (
    <div className={classes.inputContainer}>
      <TextField
        className={classes.input}
        label={label}
        name={key}
        value={value}
        onChange={(event) => onEdit(key, event.target.value)}
        helperText={error}
        error={error !== undefined}
        variant="outlined"
        size="small"
      />
    </div>
  );

  const selectField = (label, key, value, variants, onEdit, error) => (
    <div className={classes.inputContainer}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        className={classes.input}
        value={value}
        label={label}
        variant="outlined"
        onChange={(event) => {
          onEdit(key.toLowerCase(), event.target.value);
        }}
      >
        {variants.map((v) => <MenuItem value={v.title}>{v.title}</MenuItem>)}
      </Select>
    </div>
  );

  const redirect = () => (
    <div className={classes.redirectContainer}>
      <p className={classes.redirectText}>
        {t('registration.have_account')}
      </p>
      <a className={classes.link} href="/auth/login">{t('registration.login_here')}</a>
    </div>
  );

  return (
    <Paper
      elevation={16}
      className={classes.loginContainer}
    >
      <Typography className={classes.header}>Registration</Typography>
      <div className={classes.form}>
        {inputField(`${t('registration.name')}`, 'Name', values.name, onChange, errors.name)}
        {inputField(`${t('registration.surname')}`, 'Surname', values.surname, onChange, errors.surname)}
        {inputField(`${t('registration.email')}`, 'Email', values.email, onChange, errors.email)}
        {inputField(`${t('registration.password')}`, 'Password', values.password, onChange, errors.password)}
        {selectField(`${t('registration.organization')}`, 'Organization', values.organization, organizations, onChange, errors.organization)}
        {selectField(`${t('registration.role')}`, 'Role', values.role, roles, onChange, errors.role)}
        <Button
          className={classes.button}
          type="submit"
          onClick={onSubmit}
          variant="contained"
        >
          {t('registration.submit')}
        </Button>
        {redirect()}
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
    organization: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    organization: PropTypes.string,
    role: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  getRoles: PropTypes.func.isRequired,
  getOrganizations: PropTypes.func.isRequired,
  organizations: PropTypes.arrayOf(PropTypes.shape()),
  roles: PropTypes.arrayOf(PropTypes.shape()),
};

RegistrationForm.defaultProps = {
  errors: {},
  organizations: [],
  roles: [],
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  organizations: state.organizations.organizations,
  roles: state.roles.roles,
});

export default connect(mapStateToProps, {
  getOrganizations: getAllOrganizations,
  getRoles: getRolesList,
})(RegistrationForm);
