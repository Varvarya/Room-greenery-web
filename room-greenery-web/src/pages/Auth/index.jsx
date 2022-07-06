import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Route, Switch, useHistory, useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../../components/authForms/loginForm';
import useStyles from './styles';
import { ValidateUserInfo } from '../../utils/validateUserInfo';
import RegistrationForm from '../../components/authForms/registrationForm';
import ToastMessage from '../../components/toast';
import { authSuccess } from '../../store/modules/auth/types';
import { loginUser } from '../../store/modules/auth/actionsCreator';

const AuthPage = ({ login }) => {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [alertState, setAlertState] = useState({ type: 'warning', message: '', isVisible: false });

  const onChange = (key, value) => {
    console.log(key, value);
    console.log('old', values);
    const prevState = values;
    prevState[key.toLowerCase()] = value;
    console.log('new', prevState);
    setValues(prevState);
    setErrors({});
  };

  const onSubmit = () => {
    console.log('login');
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      login(values).then((res) => {
        console.log(res);
        if (res.type === authSuccess) {
          history.push('/');
        } else if (res.payload.error) {
          setAlertState({ type: 'error', message: 'Something went wrong, try again', isVisible: true });
        }
      });
    }
  };

  const { path, url } = useRouteMatch();

  console.log(path);

  return (
    <Switch>
      <div className={classes.root}>
        {alertState.isVisible
            && <ToastMessage type={alertState.type} message={alertState.message} />}
        <Route path={`${path}/login`}>
          <LoginForm
            values={values}
            error={errors}
            onChange={onChange}
            login={onSubmit}
          />
        </Route>
        <Route path={`${path}/registration`}>
          <RegistrationForm
            values={values}
            error={errors}
            onChange={onChange}
          />
        </Route>

      </div>
    </Switch>
  );
};

AuthPage.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  actionErrors: state.auth.error,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  login: loginUser,
})(AuthPage);
