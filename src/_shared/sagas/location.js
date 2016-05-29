import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import loc from '../modules/location';
import getLocation from '../services/geolocation';

function* handleLocationCreate({ payload }) {
  const location = yield getLocation();
  yield put(loc.actions.update({ id: payload.id, updates: { location } }));
}

export default function* locationSaga() {
  yield* [
    takeLatest(loc.constants.create, handleLocationCreate),
  ];
}
