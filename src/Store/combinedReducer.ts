import { combineReducers } from 'redux';
import { toasterReducer } from 'components/Toaster/Model/reducer';

const rootReducer = combineReducers({
  toasterReducer,
});

export default rootReducer;
