import {
  getBackupsLoading,
  getBackupsSuccess,
  getBackupsFailed,

  createBackupLoading,
  createBackupSuccess,
  createBackupFailed,

  restoreBackupLoading,
  restoreBackupSuccess,
  restoreBackupFailed,
} from './types';

export const initialState = {
  loading: false,
  error: '',
  list: [],
};

const actionHandler = (state, action) => {
  switch (action.type) {
    case getBackupsLoading:
    case createBackupLoading:
    case restoreBackupLoading:
      return {
        ...state, loading: true, list: [], error: '',
      };
    case getBackupsSuccess:
      return {
        ...state, loading: false, list: action.payload.data, error: '',
      };
    case createBackupSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case restoreBackupSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case getBackupsFailed:
    case createBackupFailed:
    case restoreBackupFailed:
      return {
        ...state, loading: false, list: [], error: action.error,
      };
    default:
      return state;
  }
};

export default function reducer(state = initialState, action) {
  return actionHandler(state, action);
}
