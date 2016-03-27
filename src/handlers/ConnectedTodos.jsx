import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { actions } from '../modules/todo';

const mapState = state => {
  return {
    todos: [... state.toJS()],
  }
};

const mapDispatch = dispatch => {
  return {
    createTodo: todo => dispatch(actions.createTodo({todo})),
    destroyTodo: index => dispatch(actions.destroyTodo({index})),
    updateTodo: (index, todo) =>
      dispatch(actions.updateTodo({index, todo})),
  };
};

export class TodosContainer extends React.Component {
  componentDidMount() {
    // Kickoff Fetch Todos
  }

  render() {
    return (
      <TodoList {...this.props}/>>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(TodosContainer)
