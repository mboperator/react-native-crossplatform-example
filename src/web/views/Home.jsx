import React from 'react';
import { connectModule } from 'redux-modules';
import locationModule from 'modules/location';
import TodoList from 'components/TodoList';

@connectModule(locationModule)
export default class Home extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      hydrate: React.PropTypes.func,
    }),
    collection: React.PropTypes.array,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.hydrate();
  }

  render() {
    const { collection, actions } = this.props;
    return (
      <TodoList
        actions={actions}
        collection={collection}
      />
    );
  }
}
