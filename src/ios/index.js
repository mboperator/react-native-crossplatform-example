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
  TextInput,
  View,
} from 'react-native';
import { Interface as TodoInterface } from '../_shared/modules/todo';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import modules from '../_shared/modules';
import generateStore from '../_shared/utils/generateStore';

const store = generateStore(modules);

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
    marginBottom: 5,
  },
});

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Add Todo</Text>
        <TextInput
          style={{ height: 45, borderColor: 'gray', borderWidth: 1 }}
          onSubmitEditing={e => {
            this.props.actions.createTodo({
              description: e.nativeEvent.text,
            });
          }}
          keyboardType="default"
        />
        <View style={styles.instructions}>
          <TodoList
            items={this.props.todos}
            removeTodo={this.props.actions.destroyTodo}
          />
        </View>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const ConnectedTodos = TodoInterface('', TodoApp);

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
