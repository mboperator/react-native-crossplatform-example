import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppLayout from 'layouts/AppLayout';
import {
  List,
  Detail,
} from './views';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={List} />
    <Route path=":event_id" component={Detail} />
  </Route>
);
