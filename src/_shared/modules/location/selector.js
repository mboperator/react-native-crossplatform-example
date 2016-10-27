import { Map } from 'immutable';
import { createSelector, createStructuredSelector } from 'reselect';

const locationsSelector = state => state.locations || Map();

const collectionSelector = createSelector(
  locationsSelector,
  locations => locations.get('collection', Map()).toList().toJS()
);

const regionSelector = createSelector(
  locationsSelector,
  locations => ({
    ...locations.get('region', Map({ latitude: 0, longitude: 0 })).toJS(),
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })
);

export default createStructuredSelector({
  collection: collectionSelector,
  region: regionSelector,
});
