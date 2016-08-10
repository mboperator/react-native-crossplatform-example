import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  MapView,
} from 'react-native';

import { connectModule } from 'redux-modules';
import { createSelector, createStructuredSelector } from 'reselect';
import locationModule from '../../_shared/modules/location';
import { Map } from 'immutable';
import storage from '../../_shared/services/storage';


const locationsSelector = state => state.locations;
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

const selector = createStructuredSelector({
  locations: createStructuredSelector({
    collection: collectionSelector,
    region: regionSelector,
  }),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    height: 150,
    width: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});


@connectModule(selector, locationModule)
export default class App extends Component {
  componentDidMount() {
    const { actions = {} } = this.props.locations;
    actions.hydrate();
  }

  render() {
    const {
      actions = {},
      collection = [],
      region,
    } = this.props.locations || {};

    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 45, borderColor: 'gray', borderWidth: 1 }}
          onSubmitEditing={e => {
            actions.create({ description: e.nativeEvent.text });
          }}
          keyboardType="default"
        />
        <Text style={styles.welcome}>
          {locationModule.name}
        </Text>
        <Text style={styles.welcome}>
          {JSON.stringify(collection)}
        </Text>
        <Text style={styles.welcome}>
          Map
        </Text>
        <MapView
          style={styles.map}
          region={region}
        />
      </View>
    );
  }
}
