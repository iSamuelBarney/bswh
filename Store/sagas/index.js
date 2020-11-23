import {call, all, spawn} from 'redux-saga/effects';
import watchers from './watchers';

function* rootSaga() {
  yield all(
    watchers.map((saga) => {
      return spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      });
    }),
  );
}

export default rootSaga;
