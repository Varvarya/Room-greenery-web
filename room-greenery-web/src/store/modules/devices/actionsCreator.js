import {
  getByIdLoading,
  getByIdSuccess,
  getByIdFailed,

  getByOrganizationLoading,
  getByOrganizationSuccess,
  getByOrganizationFailed,

  getBrokenLoading,
  getBrokenSuccess,
  getBrokenFailed,

  addDeviceLoading,
  addDeviceSuccess,
  addDeviceFailed,

  updateDeviceLoading,
  updateDeviceSuccess,
  updateDeviceFailed,

  deleteByIdLoading,
  deleteByIdSuccess,
  deleteByIdFailed,
} from './types';

export function getById(id) {
  return {
    types: [
      getByIdLoading,
      getByIdSuccess,
      getByIdFailed,
    ],
    payload: {
      request: {
        url: `/devices/device/${id}`,
      },
    },
  };
}

export function getByOrganization() {
  return {
    types: [
      getByOrganizationLoading,
      getByOrganizationSuccess,
      getByOrganizationFailed,
    ],
    payload: {
      request: {
        url: '/devices/organization',
      },
    },
  };
}

export function getBrokenOrganization() {
  return {
    types: [
      getBrokenLoading,
      getBrokenSuccess,
      getBrokenFailed,
    ],
    payload: {
      request: {
        url: '/devices/broken',
      },
    },
  };
}

export function addDevice(plantId) {
  return {
    types: [
      addDeviceLoading,
      addDeviceSuccess,
      addDeviceFailed,
    ],
    payload: {
      request: {
        method: 'POST',
        url: '/devices/',
        data: { plantId },
      },
    },
  };
}

export function updateDeviceById(data) {
  return {
    types: [
      updateDeviceLoading,
      updateDeviceSuccess,
      updateDeviceFailed,
    ],
    payload: {
      request: {
        method: 'PUT',
        url: `/devices/device/${data.id}`,
        data: { plantId: data.plantId },
      },
    },
  };
}

export function deleteDeviceById(id) {
  return {
    types: [
      deleteByIdLoading,
      deleteByIdSuccess,
      deleteByIdFailed,
    ],
    payload: {
      request: {
        method: 'DELETE',
        url: `/devices/device/${id}`,
      },
    },
  };
}
