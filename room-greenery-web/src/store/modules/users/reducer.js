import {
  getAllLoading,
  getAllSuccess,
  getAllFailed,

  getByIdLoading,
  getByIdSuccess,
  getByIdFailed,

  getByNameSurnameLoading,
  getByNameSurnameSuccess,
  getByNameSurnameFailed,

  getMeLoading,
  getMeSuccess,
  getMeFailed,

  updateUserLoading,
  updateUserSuccess,
  updateUserFailed,

  deleteByIdLoading,
  deleteByIdSuccess,
  deleteByIdFailed,

  deleteByNameLoading,
  deleteByNameSuccess,
  deleteByNameFailed,
} from './types';

export const initialState = {
  loading: false,
  error: '',
  users: [],
  me: {},
};

const actionHandler = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case getAllLoading:
    case getByIdLoading:
    case getByNameSurnameLoading:
    case getMeLoading:
    case updateUserLoading:
    case deleteByIdLoading:
    case deleteByNameLoading:
      return {
        ...state, loading: true, user: {}, error: '',
      };
    case getAllSuccess:
      return {
        ...state, loading: false, users: action.payload.data, error: '',
      };
    case getByIdSuccess:
      return {
        ...state, loading: false, users: action.payload.data, error: '',
      };
    case getByNameSurnameSuccess:
      return {
        ...state, loading: false, users: action.payload.data, error: '',
      };
    case getMeSuccess:
      return {
        ...state, loading: false, error: '', me: action.payload.data,
      };
    case updateUserSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case deleteByIdSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case deleteByNameSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case getAllFailed:
    case getByIdFailed:
    case getByNameSurnameFailed:
    case getMeFailed:
    case updateUserFailed:
    case deleteByIdFailed:
    case deleteByNameFailed:
      return {
        ...state,
        loading: false,
        organizations: [],
        organization: undefined,
        error: action.error,
      };
    default:
      return state;
  }
};

export default function reducer(state = initialState, action) {
  return actionHandler(state, action);
}
