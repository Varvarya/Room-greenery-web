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

export function getAllUsersWithOrganizations() {
  return {
    types: [
      getAllLoading,
      getAllSuccess,
      getAllFailed,
    ],
    payload: {
      request: {
        url: '/users/organizations',
      },
    },
  };
}

export function getUserById(id) {
  return {
    types: [
      getByIdLoading,
      getByIdSuccess,
      getByIdFailed,
    ],
    payload: {
      request: {
        url: `/users/user/${id}`,
      },
    },
  };
}

export function getUserByName(data) {
  console.log('data', data);

  return {
    types: [
      getByNameSurnameLoading,
      getByNameSurnameSuccess,
      getByNameSurnameFailed,
    ],
    payload: {
      request: {
        method: 'POST',
        url: '/users',
        data,
      },
    },
  };
}

export function getMe() {
  return {
    types: [
      getMeLoading,
      getMeSuccess,
      getMeFailed,
    ],
    payload: {
      request: {
        url: '/users/me',
      },
    },
  };
}

export function updateUser(data) {
  return {
    types: [
      updateUserLoading,
      updateUserSuccess,
      updateUserFailed,
    ],
    payload: {
      request: {
        method: 'PUT',
        url: `/users/user/${data.id}`,
        data: {
          name: data.name,
          surname: data.surname,
          email: data.email,
          password: data.oldPassword,
          newPassword: data.newPassword,
        },
      },
    },
  };
}

export function deleteById(id) {
  return {
    types: [
      deleteByIdLoading,
      deleteByIdSuccess,
      deleteByIdFailed,
    ],
    payload: {
      request: {
        method: 'DELETE',
        url: `/users/user/${id}`,
      },
    },
  };
}

export function deleteByName(data) {
  return {
    types: [
      deleteByNameLoading,
      deleteByNameSuccess,
      deleteByNameFailed,
    ],
    payload: {
      request: {
        method: 'DELETE',
        url: '/users/user',
        data: {
          name: data.name,
          surname: data.surname,
        },
      },
    },
  };
}
