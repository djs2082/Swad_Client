import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './combinedReducer';

const configureReduxStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
  });

  return store;
};

export default configureReduxStore;
