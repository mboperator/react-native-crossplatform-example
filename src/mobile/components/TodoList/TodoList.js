import React, { Component, PropTypes } from 'react';
import { List, ListItem, Text } from 'native-base';

export default class TodoList extends Component {
  static propTypes = {
    collection: PropTypes.array,
  };

  render() {
    const { collection } = this.props;
    return (
      <List>
        {collection.map(object => (
          <ListItem>
            <Text>{object.description}</Text>
          </ListItem>
        ))}
      </List>
    );
  }
}
