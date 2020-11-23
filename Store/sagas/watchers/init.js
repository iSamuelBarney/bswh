import {take, cancel, put, delay} from 'redux-saga/effects';
import axios from 'axios';
import {TYPE, ID} from '@@Store/actions';
import {REHYDRATE} from 'redux-persist';

const {REQUEST, FAILURE, SUCCESS} = TYPE;
const {FETCH_USERS} = ID;

function* initWatcher() {
  let lastTask;
  while (true) {
    const action = yield take(REHYDRATE);

    if (lastTask) {
      yield cancel(lastTask);
    }

    yield put({
      type: REQUEST,
      id: FETCH_USERS,
    });

    const users = yield axios.get('https://jsonplaceholder.typicode.com/users');

    yield put({
      type: users?.data?.length && users?.status === 200 ? SUCCESS : FAILURE,
      id: FETCH_USERS,
      data: users?.data,
    });
  }
}

export default initWatcher;
