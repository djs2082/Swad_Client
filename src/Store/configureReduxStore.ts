import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './combinedReducer';
import thunkMiddleware from 'redux-thunk';

const configureReduxStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
  });

  return store;
};

export default configureReduxStore;
