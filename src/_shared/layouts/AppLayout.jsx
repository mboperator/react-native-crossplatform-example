import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const { array, object, oneOfType } = PropTypes;

import { Sidebar, Header, Menu } from 'grommet';

const AppLayout = ({ children }) => (
  <div>
    <Sidebar>
      <Header>
        Levi
      </Header>
      <Menu primary={true}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Menu>
    </Sidebar>
    <section>
      {children}
    </section>
  </div>
);

AppLayout.propTypes = {
  children: oneOfType([array, object]),
};

export default AppLayout;
