import axios from 'axios';
import camelcaseKeys from 'change-case-object';
import { showToaster } from 'common/toasterActions';
import isEmpty from 'lodash/isEmpty';
import { clearDefaultStorage, getDefaultStorage, getItemFromStorage } from 'services/storage';
import actions from 'common/authActions';
import { isMasquerading } from 'utils/common';
import {
  DEFAULT_URL, authHeaderKeys, proxyAuthHeaderKeys,
} from './constants';
import envConstants from 'envConstants.js';

export const setAuthHeaders = (headers) => {
  authHeaderKeys.forEach((key) => {
    if (!isEmpty(headers[key])) {
      axios.defaults.headers.common[key] = headers[key];
    }
  });
};

export const deleteAuthHeaders = () => {
  authHeaderKeys.forEach((key) => {
    delete axios.defaults.headers.common[key];
  });
};

export const setAuthHeadersFromDefaultStorage = () => {
  if (getDefaultStorage.length) {
    authHeaderKeys.forEach((key) => {
      if (getItemFromStorage(key)) {
        axios.defaults.headers.common[key] = getItemFromStorage(key);
      }
    });
  }
};

axios.defaults.baseURL = DEFAULT_URL;
axios.defaults.timeout = 120000;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common.Platform = 'Web';
axios.defaults.validateStatus = (status) => status >= 200 && status < 300;

const instance = axios.create();

export const basicInstance = axios.create();

// this instance should be used when urls with original headers(non patient) is called.
export const nonMasqueradingInstance = axios.create();

const handleErrors = (store, error) => {
  if (envConstants.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('Error Logging :: ', error.message, JSON.stringify(error));
  }
  if (error.message) {
    if (error.message === 'Network Error') {
      store.dispatch(showToaster({ message: 'No internet connection. Please check your internet settings', type: 'error' }));
      return Promise.reject(error);
    }
  }
  if (!error.response) {
    if (error.code === 'ECONNABORTED') {
      store.dispatch(showToaster({ type: 'error', message: 'Request Timeout' }));
      const timeoutError = error;
      timeoutError.response = {
        data: {},
      };
      return Promise.reject(timeoutError);
    }
    store.dispatch(showToaster({ type: 'error', message: error.message }));
    return Promise.reject(error);
  }
  if (error.response) {
    let errorMessage = 'Something went wrong.';
    switch (error.response.status) {
      case (400):
        if (error.response.data.errors) {
          if (error.response.data.errors.full_messages && error.response.data.errors.full_messages.length) {
            errorMessage = error.response.data.errors.full_messages[0]; //eslint-disable-line
          }
          if (error.response.data.errors.length) {
            errorMessage = error.response.data.errors[0]; //eslint-disable-line
          }
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        }
        store.dispatch(showToaster({ message: errorMessage, type: 'error' }));
        break;
      case (401):
        store.dispatch(actions.signOutRequestSucceeded());
        clearDefaultStorage();
        deleteAuthHeaders();
        store.dispatch(showToaster({ message: 'Session Expired. Please login again.' }));
        break;
      case 422:
        if (error.response.data.errors) {
          if (error.response.data.errors.full_messages && error.response.data.errors.full_messages.length) {
            errorMessage = error.response.data.errors.full_messages[0]; //eslint-disable-line
          }
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        }
        // REMOVE HardCoded check
        if (errorMessage !== 'Not a valid zipcode') {
          store.dispatch(showToaster({ message: errorMessage, type: 'error' }));
        }
        break;
      case (500):
        store.dispatch(showToaster({ type: 'error', message: error.message || 'Something went wrong.' }));
        break;
      case (404):
        store.dispatch(showToaster({ type: 'error', message: 'Information you requested, either does not exist or is not authorized for access.' }));
        break;
      default:
        store.dispatch(showToaster({ type: 'error', message: error.message }));
        break;
    }
  }
  return Promise.reject(error);
};


const setNonMasqueradingAuthHeadersInInterceptors = (config) => {
  if (!isEmpty(getItemFromStorage('access-token'))) {
    authHeaderKeys.forEach((key) => {
      config.headers.common[key] = getItemFromStorage(key);
    });
  }
  return config;
};

const setAuthHeadersInInterceptors = (config) => {
  const isMasqueradingSession = isMasquerading();
  if (!isEmpty(getItemFromStorage('access-token'))) {
    if (isMasqueradingSession) {
      proxyAuthHeaderKeys.forEach((key, index) => {
        config.headers.common[authHeaderKeys[index]] = getItemFromStorage(key);
      });
    } else {
      authHeaderKeys.forEach((key) => {
        config.headers.common[key] = getItemFromStorage(key);
      });
    }
  }
  return config;
};

export const setupInterceptor = (store) => {
  instance.interceptors.response.use(
    (response) => camelcaseKeys.camelCase(response),
    (error) => handleErrors(store, error),
  );

  instance.interceptors.request.use(
    (config) => setAuthHeadersInInterceptors(config),
    (error) => Promise.reject(error),
  );
};

export const setupBasicInterceptor = (store) => {
  basicInstance.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => handleErrors(store, error),
  );

  basicInstance.interceptors.request.use(
    (config) => setAuthHeadersInInterceptors(config),
    (error) => Promise.reject(error),
  );
};

export const setupNonMasqueradingInterceptor = (store) => {
  nonMasqueradingInstance.interceptors.response.use(
    (response) => camelcaseKeys.camelCase(response),
    (error) => handleErrors(store, error),
  );

  nonMasqueradingInstance.interceptors.request.use(
    (config) => setNonMasqueradingAuthHeadersInInterceptors(config),
    (error) => Promise.reject(error),
  );
};

export default instance;
