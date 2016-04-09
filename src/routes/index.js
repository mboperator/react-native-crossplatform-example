import AppLayout from 'layouts/AppLayout';
import Home from './Home';
import About from './About';

export default {
  path: '/',
  component: AppLayout,
  indexRoute: Home,
  childRoutes: [
    About,
  ],
};
