import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import persistedReducer from './reducers';
import logger from 'redux-logger';

const middleWares = () => {
  if (__DEV__ && logger) {
    return [logger];
  } else {
    return [];
  }
};

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middleWares()));
  let persistor = persistStore(store);
  return {store, persistor};
};
