import { Reducer, AnyAction } from 'redux';
import { ToasterType } from '../types';
import { SHOW_TOASTER, REMOVE_TOASTER } from './constants';

interface ToasterReducerState {
  toasters: ToasterType[];
}

const intialToasters = {
  toasters: [],
};

// eslint-disable-next-line import/prefer-default-export
export const toasterReducer: Reducer<ToasterReducerState, AnyAction> = (
  state = intialToasters,
  action
) => {
  switch (action.type) {
    case SHOW_TOASTER:
      return {
        toasters: [...state.toasters, action.payload],
      };
    case REMOVE_TOASTER:
      return {
        toasters: state.toasters.filter(
          (toaster: ToasterType) => toaster.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
