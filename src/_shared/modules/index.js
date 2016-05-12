import { reducer as todoReducer } from './todo';
import { reducer as userReducer } from './user';

const reducers = {
  // TODO: Yeoman should put new modules here
  todos: todoReducer,
  users: userReducer,
};

export default reducers;
