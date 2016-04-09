import React from 'react';
import { ListItem, Heading, Button } from 'grommet';

const TodoItem = (
  actions,
  { id, title, description, checked },
  i
) => (
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
      <Button onClick={() => actions.destroyTodo(i)}>
        Delete Todo
      </Button>
    </aside>
  </ListItem>
);

export default TodoItem;
