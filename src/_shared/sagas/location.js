import { takeLatest } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import loc from '../modules/location';
import storage from '../services/storage';
import getLocation from '../services/geolocation';

const { constants } = loc;

function* create({ payload }) {
  try {
    const location = yield getLocation();
    yield put(loc.actions.update({ id: payload.id, updates: { location } }));
  } catch (e) {

  }
}

function* hydrate() {
  try {
    const locations = yield storage.get('locations');
    yield put(loc.actions.hydrateSucess(locations));
  } catch (e) {
    yield put(loc.actions.hydrateError(e));
  }
}

function* persist() {
  try {
    const locations = yield select(state => state.locations);
    yield storage.set('levi_locations', JSON.stringify(locations.toJS()));
  } catch (e) {
    console.log('Persist!', e);
  }
}

export default function* locationSaga() {
  yield [
    takeLatest(constants.create, create),
    takeLatest(constants.hydrate, hydrate),
    takeLatest([constants.update, constants.destroy], persist),
  ];
}
