import React from 'react';
import { List, Header, Form, FormField, Button, Box } from 'grommet';
import { findDOMNode } from 'react-dom';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object,
  };

  _create = (e) => {
    e.preventDefault();
    const inputNode = findDOMNode(this.refs.description);
    this.props.actions.create({
      todo: { description: inputNode.value },
    });

    inputNode.value = '';
  }

  render() {
    const { data = [], actions } = this.props;
    return (
      <Box
        justify="center"
        pad={{
          horizontal: 'small',
          vertical: 'small',
        }}
      >
        <Box>
          <Form onSubmit={this._create}>
            <Header>Create a Todo</Header>
            <FormField label="Description" htmlFor="decription">
              <input id="description" ref="description" type="text" />
            </FormField>
          </Form>
        </Box>

        <Box pad={{ vertical: 'medium' }}>
          <Button
            onClick={this._create}
          >
            Create
          </Button>
        </Box>

        <Box>
          <List>
            {data.map((todo, index) =>
              <TodoItem
                key={`${todo.description} ${index}`}
                { ...{ ...todo, actions, index } }
              />
            )}
          </List>
        </Box>
      </Box>
    );
  }
}

