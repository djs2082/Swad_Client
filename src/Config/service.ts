import { Toaster } from 'Config/main.types';

export const getItemFromStorage = (key: string): string | null =>
  window.sessionStorage.getItem(key);

export const difference = (array: object[], values: object[]) => {
  return array.filter(item => !values.includes(item));
};

const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const createToaster = (options: Toaster) => ({
  type: options.type || 'success',
  id: options.id || generateUUID(),
  message: options.message || 'Something went wrong!',
  timeout: options.timeout || 3000,
});
