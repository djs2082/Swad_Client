import { Reducer, AnyAction } from 'redux';
// import {} from '../types';
// import { DUMMY_CONSTANT } from './constants';

interface SearchBarReducerStateType {}

const initialSearchBarData = {};

// eslint-disable-next-line import/prefer-default-export
export const searchBarReducer: Reducer<SearchBarReducerStateType, AnyAction> = (
  state = initialSearchBarData,
  action
) => {
  switch (action.type) {
    // case DUMMY_CONSTANT:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
