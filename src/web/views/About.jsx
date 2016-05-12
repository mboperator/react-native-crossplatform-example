import React, { PropTypes } from 'react';
import { connectModule } from 'redux-modules';
import userModule from 'modules/user';

const { shape, array, func } = PropTypes;

@connectModule(state => state, userModule)
export default class About extends React.Component {
  static propTypes = {
    users: shape({
      actions: shape({
        fetch: func,
      }),
      collection: array,
    }),
  }

  componentDidMount() {
    this.props.users.actions.fetch();
  }

  render() {
    return (
      <div>
        Users go here :)
      </div>
    );
  }
}
