import { generateUUID } from 'config/service';
import { ToasterType } from './types';

/* eslint-disable */
export const createToaster = (options: ToasterType) => ({
  type: options.type || 'success',
  id: options.id || generateUUID(),
  message: options.message || 'Something went wrong!',
  timeout: options.timeout || 3000,
});
