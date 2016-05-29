import React from 'react';
import { connectModule } from 'redux-modules';
import locationModule from 'modules/location';
import TodoList from 'components/TodoList';

import storage from 'services/storage';

import { Map } from 'immutable';

const selector = state => {
  return {
    collection: state.locations.get('collection', Map()).toList().toJS(),
  };
};

@connectModule(selector, locationModule)
export default class Home extends React.Component {
  componentDidMount() {
    const { actions } = this.props.locations;
    storage
      .get('test')
      .then(locations => {
        if (!locations) { return; }
        actions.hydrate(locations);
      });
  }

  render() {
    const { locations } = this.props;
    return( <TodoList {...locations} /> );
  }
}
