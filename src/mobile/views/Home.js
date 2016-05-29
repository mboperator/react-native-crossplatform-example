import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import { connectModule } from 'redux-modules';
import { createSelector, createStructuredSelector } from 'reselect';
import locationModule from '../../_shared/modules/location';
import { Map } from 'immutable';

const locationsSelector = state => state.location;
const collectionSelector = createSelector(
  locationsSelector,
  locations => locations.get('collection', Map()).toList().toJS()
);
const selector = createStructuredSelector({
  collection: collectionSelector,
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
});


@connectModule(selector, locationModule)
export default class App extends Component {
  componentDidMount() {
    const { actions = {} } = this.props.locations;
    actions.create({ description: 'Hello' });
  }

  render() {
    const { actions = {}, collection = [] } = this.props.locations || {};
    console.log('My props', this.props);
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
          Setting module {locationModule.name}
        </Text>
        <Text style={styles.welcome}>
          {JSON.stringify(collection)}
        </Text>
      </View>
    );
  }
}
