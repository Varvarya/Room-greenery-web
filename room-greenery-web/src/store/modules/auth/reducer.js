import {
  registerLoading,
  registerSuccess,
  registerFailed,
  authLoading,
  authSuccess,
  authFailed,
} from './types';

export const initialState = {
  loading: false,
  error: '',
  user: {},
};

const actionHandler = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case authLoading:
    case registerLoading:
      return {
        ...state, loading: true, user: {}, error: '',
      };
    case authSuccess:
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', action.payload.data.access_token);
      return {
        ...state, loading: false, user: action.payload.data, error: '',
      };
    case registerSuccess:
      return {
        ...state, loading: false, user: {}, error: '',
      };
    case authFailed:
    case registerFailed:
      return {
        ...state, loading: false, user: {}, error: action.error,
      };
    default:
      return state;
  }
};

export default function reducer(state = initialState, action) {
  return actionHandler(state, action);
}
