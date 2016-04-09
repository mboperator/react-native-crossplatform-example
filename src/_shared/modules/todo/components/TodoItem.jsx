import React, { PropTypes } from 'react';
const { number, string, bool, object } = PropTypes;
import { ListItem, Heading, Button, Box, CheckBox } from 'grommet';

const TodoItem = ({ description, actions, index, checked }) => {
  return (
    <ListItem
      align="center"
      direction="row"
      justify="between"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      separator="bottom"
    >
      <Box justify="left" direction="row">
        <CheckBox checked={checked} />
        <Heading tag="h4">
          {description}
        </Heading>
      </Box>
      <Box>
        <Button onClick={() => actions.destroyTodo(index)}>
          Delete Todo
        </Button>
      </Box>
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
