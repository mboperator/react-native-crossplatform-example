import React from 'react';
import { findDOMNode } from 'react-dom';
import TodoItem from './TodoItem';

const TodoList = props => {
    const { todos = [], ... actions } = this.props;
    return (
      <div>
        <h1>Todo!</h1>

        <div>
          <label>Description</label>
          <input ref='description'/>

          <input
            type='button'
            value='Create'
            onClick={() => {
              actions.createTodo({
                description: findDOMNode(this.refs.description).value,
              })
            }}
          />
        </div>

        <ul>
          {todos.map(TodoItem.bind(null, actions))}
        </ul>
      </div>
    );
  }
};

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
};

export default TodoList;
