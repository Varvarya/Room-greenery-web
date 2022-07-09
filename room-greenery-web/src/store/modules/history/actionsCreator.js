import {
  getStatisticsLoading,
  getStatisticsSuccess,
  getStatisticsFailed,
} from './types';

export function getHistory(id, from, till) {
  const body = {};
  if (from) body.from = from;
  if (till) body.till = till;

  return {
    types: [getStatisticsLoading, getStatisticsSuccess, getStatisticsFailed],
    payload: {
      request: {
        method: 'POST',
        url: `/statistics/${id}`,
        data: body,
      },
    },
  };
}
