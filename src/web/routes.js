import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppLayout from 'layouts/AppLayout';
import {
  Home,
  About,
} from './views';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="users" component={About} />
  </Route>
);
