import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import { connectModule } from 'redux-modules';
import todoModule from '../../_shared/modules/todo';

const selector = state => {
  return {
    data: state.todos.toJS(),
  };
};

@connectModule(selector, todoModule)
export default class App extends Component {
  componentDidMount() {
    const { actions = {} } = this.props.todos;
    actions.create({ todo: { description: 'Hello' } });
  }

  render() {
    const { actions = {}, data = [] } = this.props.todos || {};
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 45, borderColor: 'gray', borderWidth: 1 }}
          onSubmitEditing={e => {
            actions.create({
              todo: { description: e.nativeEvent.text },
            });
          }}
          keyboardType="default"
        />
        <Text style={styles.welcome}>
          {JSON.stringify(data)}
        </Text>
      </View>
    );
  }
}

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
