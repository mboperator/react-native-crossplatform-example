import React from 'react';
import { connectModule } from 'redux-modules';
import locationModule from 'modules/location';
import TodoList from 'components/TodoList';

import { createSelector, createStructuredSelector } from 'reselect';
import { Map } from 'immutable';

const locationsSelector = state => state.locations || Map();
const collectionSelector = createSelector(
  locationsSelector,
  locations => locations.get('collection', Map()).toList().toJS()
);
const selector = createStructuredSelector({
  collection: collectionSelector,
});

@connectModule(selector, locationModule)
export default class Home extends React.Component {
  render() {
    const { locations } = this.props;
    return( <TodoList {...locations} /> );
  }
}
