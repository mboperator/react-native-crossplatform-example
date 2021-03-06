import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppLayout from './components/AppLayout';
import {
  Home,
  About,
} from './views';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);
