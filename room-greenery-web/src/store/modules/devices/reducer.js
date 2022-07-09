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
import { parseAvailable, parseTakenDevices } from '../../../utils/parseDevicesInfo';

export const initialState = {
  loading: false,
  error: '',
  devices: { taken: [], available: [] },
  device: undefined,
};

const actionHandler = (state, action) => {
  switch (action.type) {
    case getByIdLoading:
    case getByOrganizationLoading:
    case getBrokenLoading:
    case addDeviceLoading:
    case updateDeviceLoading:
    case deleteByIdLoading:
      return {
        ...state, loading: true, devices: [], error: '',
      };
    case getByIdSuccess:
      return {
        ...state, loading: false, device: action.payload.data, error: '',
      };
    case getByOrganizationSuccess:
      // eslint-disable-next-line no-case-declarations
      const taken = parseTakenDevices(action.payload.data.taken);
      // eslint-disable-next-line no-case-declarations
      const available = parseAvailable(action.payload.data.available);
      return {
        ...state, loading: false, devices: { taken, available }, error: '',
      };
    case getBrokenSuccess:
      return {
        ...state, loading: false, device: action.payload.data, error: '',
      };
    case addDeviceSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case updateDeviceSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case deleteByIdSuccess:
      return {
        ...state, loading: false, error: '',
      };
    case getByIdFailed:
    case getByOrganizationFailed:
    case getBrokenFailed:
    case addDeviceFailed:
    case updateDeviceFailed:
    case deleteByIdFailed:
      return {
        ...state, loading: false, devices: [], device: undefined, error: action.error,
      };
    default:
      return state;
  }
};

export default function reducer(state = initialState, action) {
  return actionHandler(state, action);
}
