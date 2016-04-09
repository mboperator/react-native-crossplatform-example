import Home from './Home';
import About from './About';

export default {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: require('layouts/AppLayout'),
      childRoutes: [
        About,
      ],
      indexRoute: Home,
    },
  ],
};
