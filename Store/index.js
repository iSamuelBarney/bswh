import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';
import persistedReducer from './reducers';
import logger from 'redux-logger';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const middleware = [sagaMiddleware];

  if (__DEV__) {
    middleware.unshift(logger);
  }

  let store = createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(...middleware)),
  );
  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
