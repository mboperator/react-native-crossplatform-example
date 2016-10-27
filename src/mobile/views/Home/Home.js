import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  MapView,
} from 'react-native';
import { connectModule } from 'redux-modules';
import { Map } from 'immutable';

import locationModule from '../../../_shared/modules/location';
import styles from './style';

@connectModule(locationModule)
export default class App extends Component {
  componentDidMount() {
    const { actions = {} } = this.props;
    actions.hydrate();
  }

  render() {
    const {
      actions = {},
      collection = [],
      region,
    } = this.props || {};
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
