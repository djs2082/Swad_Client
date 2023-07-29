import { Toaster, Action } from 'Config/main.types';
import { toasterConstants } from 'Config/constants';

const intialToasters = {
  toasters: [],
};

// eslint-disable-next-line import/prefer-default-export
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
