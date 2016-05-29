import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import Loc from '../modules/location';

import getLocation from '../services/geolocation';

function* handleLocationCreate() {
  const location = yield getLocation();
  yield put( Loc.actions.log(location) );
}

function* locationCreate() {
  yield takeLatest(Loc.constants.create, handleLocationCreate);
}

export default function* root() {
  yield [
    locationCreate(),
  ];
}
