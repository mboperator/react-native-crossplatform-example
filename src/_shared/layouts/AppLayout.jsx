import React, { PropTypes } from 'react';
const { array, object, oneOfType } = PropTypes;

import { Sidebar, Header, Menu, Anchor } from 'grommet';

const AppLayout = ({ children }) => (
  <div>
    <Sidebar>
      <Header>
        Levi
      </Header>
      <Menu primary={true}>
        <Anchor>Home</Anchor>
        <Anchor>About</Anchor>
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
