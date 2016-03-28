/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Interface as TodoInterface } from './_shared/modules/todo';
import { Provider } from 'react-redux';
import store from './_shared/modules/store';

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

class TodoApp extends Component {
  componentDidMount() {
    this.props.todos.createTodo({
      todo: { description: 'ohai' },
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the TODO APP
        </Text>
        <Text style={styles.instructions}>
          {JSON.stringify(this.props)}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const ConnectedTodos = TodoInterface('todos', TodoApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedTodos />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('TodoApp', () => App);
