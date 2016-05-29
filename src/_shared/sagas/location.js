import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import loc from '../modules/location';
import storage from '../services/storage';
import getLocation from '../services/geolocation';

function* create({ payload }) {
  const location = yield getLocation();
  yield put(loc.actions.update({ id: payload.id, updates: { location } }));
}

function* hydrate() {
  try {
    const locations = yield storage.get('locations');
    yield put(loc.actions.hydrateSucess(locations));
  } catch (e) {
    yield put(loc.actions.hydrateError(e));
  }
}

export default function* locationSaga() {
  yield* [
    takeLatest(loc.constants.create, create),
    takeLatest(loc.constants.hydrate, hydrate),
  ];
}
