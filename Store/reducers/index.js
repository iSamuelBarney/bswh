import {persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {TYPE} from '../actions';

import users from './users';
import types from './types';

const {REQUEST, SUCCESS, FAILURE} = TYPE;

const rootReducer = combineReducers({
  users,
  REQUEST: types(REQUEST),
  FAILURE: types(FAILURE),
  SUCCESS: types(SUCCESS),
});

const rootPersistConfig = {
  key: 'root',
  storage,
};

export default persistReducer(rootPersistConfig, rootReducer);
