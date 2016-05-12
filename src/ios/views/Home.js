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
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    paddingTop: 10,
    marginBottom: 5,
  },
  text: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

const selector = state => {
  return {
    data: state.todos.toJS() || [],
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
    const { actions = {}, data = [] } = this.props.todos || {};

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>tada.list</Text>
        <TextInput
          ref="todoInput"
          style={styles.text}
          keyboardType="default"
          onSubmitEditing={e => {
            actions.create({
              todo: { description: e.nativeEvent.text },
            });
            this.refs.todoInput.clear();
            setTimeout(this.refs.todoInput.focus, 0);
          }}
        />
        <View style={styles.instructions}>
          <TodoList
            items={data}
            removeTodo={actions.destroy}
          />
        </View>
      </View>
    );
  }
}

export default TodoApp;
