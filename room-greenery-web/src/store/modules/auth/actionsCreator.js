import {
  registerLoading,
  registerSuccess,
  registerFailed,
  authLoading,
  authSuccess,
  authFailed,
} from './types';

export function registerUser(data) {
  return {
    types: [registerLoading, registerSuccess, registerFailed],
    payload: {
      request: {
        method: 'POST',
        url: '/auth/register',
        data,
      },
    },
  };
}

export function loginUser(data) {
  console.log(data);

  return {
    types: [authLoading, authSuccess, authFailed],
    payload: {
      request: {
        method: 'POST',
        url: '/auth/login',
        data,
      },
    },
  };
}
