import { ToasterType } from '../types';
import { createToaster } from '../services';
import { SHOW_TOASTER, REMOVE_TOASTER } from './constants';

export const showToaster = (payload: ToasterType) => ({
  type: SHOW_TOASTER,
  payload: createToaster(payload),
});

export const removeToaster = (payload: ToasterType) => ({
  type: REMOVE_TOASTER,
  payload,
});
