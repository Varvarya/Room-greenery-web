import { applyMiddleware, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import API from './api';
import { initialState, rootReducer } from './modules';
import { middlewareConfig } from './axiosInterceptor';

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    axiosMiddleware(API, middlewareConfig),
  ),
);

export default store;
