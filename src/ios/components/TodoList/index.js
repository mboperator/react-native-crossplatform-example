import TodoListWeb from './TodoListWeb';
import TodoListAndroid from './TodoListAndroid';
import TodoListIOS from './TodoListiIOS';
import platformSpecific from '../decorators/platformSpecific';
export default platformSpecific({
  web: TodoListWeb,
  android: TodoListAndroid,
  ios: TodoListIOS,
});
