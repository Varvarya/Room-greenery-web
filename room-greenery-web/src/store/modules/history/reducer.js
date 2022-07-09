import {
  getStatisticsLoading,
  getStatisticsSuccess,
  getStatisticsFailed,
} from './types';

export const initialState = {
  loading: false,
  error: '',
  history: [],
};

const actionHandler = (state, action) => {
  switch (action.type) {
    case getStatisticsLoading:
      return {
        ...state, loading: true, history: [], error: '',
      };
    case getStatisticsSuccess:
      return {
        ...state, loading: false, history: action.payload.data, error: '',
      };
    case getStatisticsFailed:
      return {
        ...state, loading: false, history: [], error: action.error,
      };
    default:
      return state;
  }
};

export default function reducer(state = initialState, action) {
  return actionHandler(state, action);
}
