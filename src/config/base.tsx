/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Error } from 'config/main.types';
import { showToaster } from 'components/Toaster/Model/actions';
import { authHeaders } from 'config/authConstants';
import { getItemFromStorage } from 'config/service';

const modifiedAxiosInstance = axios.create();

const handleErrors = (store: any, error: Error) => {
  if (process.env.NODE_ENV === 'development')
    /* eslint-disable */
    console.log('Error Logging :: ', error.message, JSON.stringify(error));
  store.dispatch(showToaster({ message: error.message, type: 'error' }));
  return Promise.reject(error);
};

const setAuthHeadersInInterceptors = (configInParams: any) => {
  const config = configInParams;

  if (!getItemFromStorage('access-token')) {
    authHeaders.forEach((header: string) => {
      config.headers.common[header] = getItemFromStorage(header);
    });
  }
  return config;
};

export const setupInterceptor = (store: object) => {
  modifiedAxiosInstance.interceptors.response.use(
    (response: any) => response,
    (error: Error) => handleErrors(store, error)
  );

  modifiedAxiosInstance.interceptors.request.use(
    (config: object) => setAuthHeadersInInterceptors(config),
    (error: object) => Promise.reject(error)
  );
};
