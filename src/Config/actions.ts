import { Toaster } from 'Config/main.types';
import { createToaster } from 'Config/service';
import { toasterConstants } from 'Config/constants';

export const showToaster = (payload: Toaster) => ({
  type: toasterConstants.SHOW_TOASTER,
  payload: createToaster(payload),
});

export const removeToaster = (payload: Toaster) => ({
  type: toasterConstants.REMOVE_TOASTER,
  payload,
});
