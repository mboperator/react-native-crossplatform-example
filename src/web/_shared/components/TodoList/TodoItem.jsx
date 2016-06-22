import React, { PropTypes } from 'react';
const { number, string, bool, object } = PropTypes;
import { ListItem, Heading, Button, Box, CheckBox } from 'grommet';

const TodoItem = ({ description, actions, id, checked }) => (
  <ListItem
    align="center"
    direction="row"
    justify="between"
    pad={{ horizontal: 'medium', vertical: 'small' }}
    separator="bottom"
  >
    <Box direction="row">
      <CheckBox
        id={id}
        checked={checked}
        onChange={() => {
          actions.update({ id, updates: { checked: !checked } });
        }}
      />
      <Heading tag="h4">
        {description}
      </Heading>
    </Box>
    <Box>
      <Button onClick={() => actions.destroy({ id })}>
        Delete Todo
      </Button>
    </Box>
  </ListItem>
);

TodoItem.propTypes = {
  description: string,
  checked: bool,
  id: string,
  actions: object,
};

export default TodoItem;
