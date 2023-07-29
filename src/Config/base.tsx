import axios from 'axios';
import { Error } from 'src/config/main.types';
import { showToaster } from 'src/config/actions';
import { authHeaders } from 'src/config/authConstants';
import { getItemFromStorage } from 'src/config/service';

const modifiedAxiosInstance = axios.create();

const handleErrors = (store: any, error: Error) => {
  if (process.env.NODE_ENV === 'development')
    console.log('Error Logging :: ', error.message, JSON.stringify(error));
  store.dispatch(showToaster({ message: error.message, type: 'error' }));
  return Promise.reject(error);
};

const setAuthHeadersInInterceptors = (config: any) => {
  if (!getItemFromStorage('access-token')) {
    authHeaders.forEach((header:string) => {
      config.headers.common[header] = getItemFromStorage(header);
    });
  }
  return config;
};

export const setupInterceptor = (store: Object) => {
  modifiedAxiosInstance.interceptors.response.use(
    (response: any) => response,
    (error: Error) => handleErrors(store, error)
  );

  modifiedAxiosInstance.interceptors.request.use(
    (config: Object) => setAuthHeadersInInterceptors(config),
    (error: Object) => Promise.reject(error)
  );
};
