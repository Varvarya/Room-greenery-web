import {
  getOrganizationsLoading,
  getOrganizationsSuccess,
  getOrganizationsFailed,

  getByIdLoading,
  getByIdSuccess,
  getByIdFailed,

  getByTitleLoading,
  getByTitleSuccess,
  getByTitleFailed,

  addOrganizationLoading,
  addOrganizationSuccess,
  addOrganizationFailed,

  updateOrganizationLoading,
  updateOrganizationSuccess,
  updateOrganizationFailed,

  deleteByIdLoading,
  deleteByIdSuccess,
  deleteByIdFailed,

  deleteByTitleLoading,
  deleteByTitleSuccess,
  deleteByTitleFailed,
} from './types';

export const initialState = {
  loading: false,
  error: '',
  organizations: [],
  organization: undefined,
};

const actionHandler = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case getOrganizationsLoading:
    case getByIdLoading:
    case getByTitleLoading:
    case addOrganizationLoading:
    case updateOrganizationLoading:
    case deleteByIdLoading:
    case deleteByTitleLoading:
      return {
        ...state, loading: true, user: {}, error: '',
      };
    case getOrganizationsSuccess:
      return {
        ...state, loading: false, organizations: action.payload.data, error: '',
      };
    case getByIdSuccess:
      return {
        ...state, loading: false, organization: action.payload.data, error: '',
      };
    case getByTitleSuccess:
      return {
        ...state, loading: false, organization: action.payload.data, error: '',
      };
    case addOrganizationSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case updateOrganizationSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case deleteByIdSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case deleteByTitleSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case getOrganizationsFailed:
    case getByIdFailed:
    case getByTitleFailed:
    case addOrganizationFailed:
    case updateOrganizationFailed:
    case deleteByIdFailed:
    case deleteByTitleFailed:
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
