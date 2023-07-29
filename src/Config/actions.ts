import { Toaster } from 'src/config/main.types';
import { toasterConstants } from 'src/config/constants';
import { createToaster } from 'src/config/service';

export const showToaster = (payload: Toaster) => ({
  type: toasterConstants.SHOW_TOASTER,
  payload: createToaster(payload),
});

export const removeToaster = (payload: Toaster) => ({
  type: toasterConstants.REMOVE_TOASTER,
  payload,
});
