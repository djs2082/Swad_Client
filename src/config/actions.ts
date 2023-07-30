import { ToasterType } from 'components/Toaster/types';
import { createToaster } from 'components/Toaster/services';
import {
  SHOW_TOASTER,
  REMOVE_TOASTER,
} from 'components/Toaster/Model/constants';

export const showToaster = (payload: ToasterType) => ({
  type: SHOW_TOASTER,
  payload: createToaster(payload),
});

export const removeToaster = (payload: ToasterType) => ({
  type: REMOVE_TOASTER,
  payload,
});
