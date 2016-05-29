import React from 'react';
import { connectModule } from 'redux-modules';
import locationModule from 'modules/location';
import TodoList from 'components/TodoList';

import { Map } from 'immutable';

const selector = state => {
  return {
    collection: state.locations.get('collection', Map()).toList().toJS(),
  };
};

export default connectModule(
  selector,
  locationModule,
  ({ locations }) => <TodoList {...locations} />
);
