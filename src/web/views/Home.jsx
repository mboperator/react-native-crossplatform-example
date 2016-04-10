import React from 'react';

import { Interface as TodoInterface } from 'modules/todo';
import TodoList from 'components/TodoList';

@TodoInterface('todos')
export default class TodosContainer extends React.Component {
  static propTypes = {
    todos: React.PropTypes.object,
  };

  render() {
    return (
      <TodoList {...this.props.todos} />
    );
  }
}
