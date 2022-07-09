import {
  getAllLoading,
  getAllSuccess,
  getAllFailed,
} from './types';

export const initialState = {
  loading: false,
  error: '',
  roles: [],
};

const actionHandler = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case getAllLoading:
      return {
        ...state, loading: true, user: {}, error: '',
      };
    case getAllSuccess:
      return {
        ...state, loading: false, roles: action.payload.data, error: '',
      };
    case getAllFailed:
      return {
        ...state, loading: false, roles: [], error: action.error,
      };
    default:
      return state;
  }
};

export default function reducer(state = initialState, action) {
  return actionHandler(state, action);
}
