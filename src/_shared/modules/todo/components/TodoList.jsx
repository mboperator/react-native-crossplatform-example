import React from 'react';
import { List, Header, FormField, Button } from 'grommet';
import { findDOMNode } from 'react-dom';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object,
  };

  render() {
    const { todos = [], ... actions } = this.props;
    return (
      <div>
        <Header>Todo!</Header>

        <div>
          <FormField label="Description" htmlFor="decription">
            <input id="description" ref="description" type="text" />
          </FormField>

          <Button
            onClick={() =>
              actions.createTodo({
                description: findDOMNode(this.refs.description).value,
              })
            }
          >
            Create
          </Button>
        </div>

        <List>
          {todos.map(TodoItem.bind(null, actions))}
        </List>
      </div>
    );
  }
}

