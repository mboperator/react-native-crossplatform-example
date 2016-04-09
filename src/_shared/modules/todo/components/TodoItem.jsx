import React, { PropTypes } from 'react';
const { number, string, bool, object } = PropTypes;
import { ListItem, Heading, Button } from 'grommet';

const TodoItem = ({ description, actions, index }) => {
  return (
    <ListItem
      align="center"
      direction="row"
      justify="between"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      separator="bottom"
    >
      <Heading tag="h4">
        {description}
      </Heading>
      <aside>
        <Button onClick={() => actions.destroyTodo(index)}>
          Delete Todo
        </Button>
      </aside>
    </ListItem>
  );
};

TodoItem.propTypes = {
  id: number,
  description: string,
  checked: bool,
  index: number,
  actions: object,
};

export default TodoItem;
