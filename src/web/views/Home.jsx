import React from 'react';
import { connectModule } from 'redux-modules';
import todoModule from 'modules/todo';
import TodoList from 'components/TodoList';

const selector = state => {
  return {
    data: state.todos.toJS(),
  };
};

export default connectModule(
  selector,
  todoModule,
  ({ todos }) => <TodoList {...todos} />
);
