import { Reducer, AnyAction } from 'redux';
import ADD_SESSION_DATA_TO_STORE from './constants';

interface AuthReducerState {
  restaurantName: string;
  tableNumber: number;
}

const intialAuthData = {
  restaurantName: null,
  tableNumber: null,
};

const authReducer: Reducer<AuthReducerState, AnyAction> = (
  state = intialAuthData,
  action
) => {
  switch (action.type) {
    case ADD_SESSION_DATA_TO_STORE:
      return {
        restaurantName: action.payload.restaurantName,
        tableNumber: action.payload.tableNumber,
      };
    default:
      return state;
  }
};

export default authReducer;
