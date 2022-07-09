import {
  getAllLoading,
  getAllSuccess,
  getAllFailed,
} from './types';

export function getRolesList() {
  return {
    types: [getAllLoading, getAllSuccess, getAllFailed],
    payload: {
      request: {
        url: '/roles',
      },
    },
  };
}
