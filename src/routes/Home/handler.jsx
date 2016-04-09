import React from 'react';

import { Interface as TodoInterface } from 'modules/todo';
import TodoList from 'modules/todo/components/TodoList';

@TodoInterface('todos')
export default class TodosContainer extends React.Component {
  static propTypes = {
    todos: React.PropTypes.object,
  };

  componentDidMount() {
    /* Kickoff Fetch Todos */
  }

  render() {
    return (
      <TodoList {...this.props.todos} />
    );
  }
}
