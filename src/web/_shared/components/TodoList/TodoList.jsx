import React, { PropTypes } from 'react';
import { List, Header, Form, FormField, Button, Box } from 'grommet';
import { findDOMNode } from 'react-dom';
import TodoItem from './TodoItem';

const { array, object } = PropTypes;
export default class TodoList extends React.Component {
  static propTypes = {
    collection: array.isRequired,
    actions: object,
  };

  constructor(props) {
    super(props);
    this._create = this._create.bind(this);
  }

  _create(e) {
    e.preventDefault();
    const inputNode = findDOMNode(this.refs.description);
    this.props.actions.create({ description: inputNode.value });

    inputNode.value = '';
  }

  render() {
    const { collection = [], actions } = this.props;
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
            {collection.map((todo, index) =>
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

