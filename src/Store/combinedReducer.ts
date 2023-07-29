import { combineReducers } from 'redux';
import { toasterReducer } from 'src/config/reducers';

const rootReducer = combineReducers({
  toasterReducer,
});

export default rootReducer;
