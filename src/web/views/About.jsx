import React, { PropTypes } from 'react';
import { connectModule } from 'redux-modules';
import userModule from 'modules/user';
import { Tiles, Tile, Header } from 'grommet';

const { shape, array, func, bool } = PropTypes;

const selector = state => state.users.toJS();

@connectModule(selector, userModule)
export default class About extends React.Component {
  static propTypes = {
    users: shape({
      actions: shape({
        fetch: func,
      }),
      _loading: bool,
      collection: array,
    }),
  }

  componentDidMount() {
    this.props.users.actions.fetch();
  }

  render() {
    const { collection = [], _loading } = this.props.users;
    return (
      <Tiles
        flush={false}
        justify="center"
        colorIndex="light-2"
        full="horizontal"
      >

        {_loading && <Header>Loading...</Header>}
        {collection.map(user =>
          <Tile key={user.id} colorIndex="light-1">
            <Header>
              {user.name}
            </Header>
          </Tile>
        )}

      </Tiles>
    );
  }
}
