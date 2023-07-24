import { Toaster } from './main.types';
import { Action } from './main.types';
import { toasterConstants } from './constants';

const intialToasters = {
  toasters: [],
};

export const toasterReducer = (state = intialToasters, action: Action) => {
  switch (action.type) {
    case toasterConstants.SHOW_TOASTER:
      return {
        toasters: [...state.toasters, action.payload],
      };
    case toasterConstants.REMOVE_TOASTER:
      return {
        toasters: state.toasters.filter(
          (toaster: Toaster) => toaster.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
