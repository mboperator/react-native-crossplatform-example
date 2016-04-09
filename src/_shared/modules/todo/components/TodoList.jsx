import React from 'react';
import { List, Header, Form, FormField, Button, Box } from 'grommet';
import { findDOMNode } from 'react-dom';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object,
  };

  _createTodo(e) {
    e.preventDefault();
    const inputNode = findDOMNode(this.refs.description);

    this.props.actions.createTodo({
      description: inputNode.value,
    });

    inputNode.value = '';
  }

  render() {
    const { todos = [], actions } = this.props;
    return (
      <Box
        justify="center"
        pad={{
          horizontal: 'small',
          vertical: 'small',
        }}
      >
        <Box>
          <Form onSubmit={this._createTodo.bind(this)}>
            <Header>Create a Todo</Header>
            <FormField label="Description" htmlFor="decription">
              <input id="description" ref="description" type="text" />
            </FormField>
          </Form>
        </Box>

        <Box pad={{vertical: "medium"}}>
          <Button
            onClick={this._createTodo.bind(this)}
          >
            Create
          </Button>
        </Box>

        <Box>
          <List>
            {todos.map((todo, index) =>
              <TodoItem { ...{ ...todo, actions, index } } />
            )}
          </List>
        </Box>
      </Box>
    );
  }
}

