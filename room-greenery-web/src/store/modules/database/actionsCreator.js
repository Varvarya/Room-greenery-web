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

export function getBackups() {
  return {
    types: [getBackupsLoading,
      getBackupsSuccess,
      getBackupsFailed],
    payload: {
      request: {
        url: '/db',
      },
    },
  };
}

export function createBackup() {
  return {
    types: [createBackupLoading,
      createBackupSuccess,
      createBackupFailed],
    payload: {
      request: {
        method: 'POST',
        url: '/db/backup',
      },
    },
  };
}

export function restoreBackup(date) {
  return {
    types: [restoreBackupLoading,
      restoreBackupSuccess,
      restoreBackupFailed],
    payload: {
      request: {
        method: 'POST',
        url: '/db/restore',
        data: { date },
      },
    },
  };
}
