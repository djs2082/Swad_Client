import { combineReducers } from 'redux';
import { toasterReducer } from 'Config/reducers';

const rootReducer = combineReducers({
  toasterReducer,
});

export default rootReducer;
