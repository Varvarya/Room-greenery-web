import { combineReducers } from 'redux';
import authReducer, { initialState as authState } from './auth/reducer';
import organizationReducer, { initialState as organizationState } from './organizations/reducer';
import devicesReducer, { initialState as devicesState } from './devices/reducer';
import usersReducer, { initialState as usersState } from './users/reducer';
import dbReducer, { initialState as dbState } from './database/reducer';
import rolesReducer, { initialState as rolesState } from './roles/reducer';
import historyReducer, { initialState as historyState } from './history/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  organizations: organizationReducer,
  devices: devicesReducer,
  users: usersReducer,
  database: dbReducer,
  roles: rolesReducer,
  history: historyReducer,
});

export const initialState = {
  auth: authState,
  organizations: organizationState,
  devices: devicesState,
  users: usersState,
  database: dbState,
  roles: rolesState,
  history: historyState,
};
