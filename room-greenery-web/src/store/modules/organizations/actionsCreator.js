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

export function getAllOrganizations() {
  return {
    types: [
      getOrganizationsLoading,
      getOrganizationsSuccess,
      getOrganizationsFailed,
    ],
    payload: {
      request: {
        url: '/organizations',
      },
    },
  };
}

export function getOrganizationById(id) {
  return {
    types: [
      getByIdLoading,
      getByIdSuccess,
      getByIdFailed,
    ],
    payload: {
      request: {
        url: `/organizations/id/${id}`,
      },
    },
  };
}

export function getOrganizationByTitle(title) {
  return {
    types: [
      getByTitleLoading,
      getByTitleSuccess,
      getByTitleFailed,
    ],
    payload: {
      request: {
        url: `/organizations/name/${title}`,
      },
    },
  };
}

export function addOrganization(data) {
  return {
    types: [
      addOrganizationLoading,
      addOrganizationSuccess,
      addOrganizationFailed,
    ],
    payload: {
      request: {
        method: 'POST',
        url: '/organizations',
        data,
      },
    },
  };
}

export function updateOrganization(data) {
  return {
    types: [
      updateOrganizationLoading,
      updateOrganizationSuccess,
      updateOrganizationFailed,
    ],
    payload: {
      request: {
        method: 'PUT',
        url: `/organizations/id/${data.id}`,
        data: { title: data.title },
      },
    },
  };
}

export function deleteOrganizationById(id) {
  return {
    types: [
      deleteByIdLoading,
      deleteByIdSuccess,
      deleteByIdFailed,
    ],
    payload: {
      request: {
        method: 'DELETE',
        url: `/organizations/id/${id}`,
      },
    },
  };
}

export function deleteOrganizationByTitle(title) {
  return {
    types: [
      deleteByTitleLoading,
      deleteByTitleSuccess,
      deleteByTitleFailed,
    ],
    payload: {
      request: {
        method: 'DELETE',
        url: `/organizations/name/${title}`,
      },
    },
  };
}
