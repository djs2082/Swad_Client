import { combineReducers } from 'redux';
import { toasterReducer } from 'components/Toaster/Model/reducer';
import authReducer from 'common/Model/reducers';

const rootReducer = combineReducers({
  toasterReducer,
  authReducer,
});

export default rootReducer;
