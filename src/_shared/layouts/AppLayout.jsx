import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const { array, object, oneOfType } = PropTypes;

import { Sidebar, Header, Menu } from 'grommet';

const AppLayout = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
  }}>
    <Sidebar style={{ flexGrow: 1 }}>
      <Menu primary={true}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Menu>
    </Sidebar>
    <section style={{ flexGrow: 2, padding: '0 5px' }}>
      <Header
        size="large"
        justify="between"
        colorIndex="neutral-1"
        pad={{ vertical: 'small' }}>
        Levi
      </Header>
      {children}
    </section>
  </div>
);

AppLayout.propTypes = {
  children: oneOfType([array, object]),
};

export default AppLayout;
