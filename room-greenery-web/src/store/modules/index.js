import { combineReducers } from 'redux';
import authReducer, { initialState as authState } from './auth/reducer';
import organizationReducer, { initialState as organizationState } from './organizations/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  organizations: organizationReducer,
});

export const initialState = {
  auth: authState,
  organizations: organizationState,
};
