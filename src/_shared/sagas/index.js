import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import Loc from '../modules/location';

function* handleLocationCreate() {
  yield put(Loc.actions.log());
}

function* locationCreate() {
  yield takeLatest(Loc.constants.create, handleLocationCreate);
}

export default function* root() {
  yield [
    locationCreate(),
  ];
}
