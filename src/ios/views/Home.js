import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  PropTypes,
} from 'react-native';

const { shape, array, func } = PropTypes;

import { connectModule } from 'redux-modules';
import TodoList from '../components/TodoList';
import todoModule from '../../_shared/modules/todo';

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

const selector = state => {
  return {
    data: state.todos.toJS(),
  };
};

@connectModule(selector, todoModule)
class TodoApp extends Component {
  static propTypes = {
    todos: shape({
      actions: shape({
        create: func,
        update: func,
        destroy: func,
      }),
      data: array,
    }),
  };

  render() {
    const { actions, data } = this.props.todos;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Add Todo</Text>
        <TextInput
          style={{ height: 45, borderColor: 'gray', borderWidth: 1 }}
          onSubmitEditing={e => {
            actions.create({
              todo: { description: e.nativeEvent.text },
            });
          }}
          keyboardType="default"
        />
        <View style={styles.instructions}>
          <TodoList
            items={data}
            removeTodo={actions.destroy}
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

export default TodoApp;
