import {persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';

import users from './users';
import types from './types';

const rootReducer = combineReducers({
  users,
  REQUEST: types,
  FAILURE: types,
  SUCCESS: types,
});

const rootPersistConfig = {
  key: 'root',
  storage,
};

export default persistReducer(rootPersistConfig, rootReducer);
