import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const { array, object, oneOfType } = PropTypes;

import { App, Sidebar, Header, Menu, Box } from 'grommet';

const AppLayout = ({ children }) => (
  <App>
    <Header
      size="large"
      colorIndex="neutral-1"
      pad="medium"
    >
      Levi
    </Header>
    <Box direction="row" full>
      <Sidebar style={{ flexGrow: 1 }}>
        <Menu primary={true}>
          <Link to="/">Todos</Link>
          <Link to="/users">Users</Link>
        </Menu>
      </Sidebar>
      <Box pad="small" full>
        {children}
      </Box>
    </Box>
  </App>
);

AppLayout.propTypes = {
  children: oneOfType([array, object]),
};

export default AppLayout;
