import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as userApi from '../services/userApi';
import { actions, constants } from '../modules/user';

function* handleFetchEvents() {
  try {
    const { data } = yield userApi.fetch();
    yield put(actions.fetchSuccess({ data }));
  } catch (e) {
    yield put(actions.fetchError({ e }));
  }
}

export default function* userSagas() {
  yield* [
    takeLatest(constants.fetch, handleFetchEvents),
  ];
}
