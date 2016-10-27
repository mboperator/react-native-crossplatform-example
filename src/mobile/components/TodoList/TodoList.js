import React, { PropTypes } from 'react';
import { List, ListItem, Text } from 'native-base';

const TodoList = ({ collection }) => (
  <List>
    {collection.map(object => (
      <ListItem key={object.id}>
        <Text>{object.description}</Text>
      </ListItem>
    ))}
  </List>
);

TodoList.propTypes = {
  collection: PropTypes.array,
};

export default TodoList;
