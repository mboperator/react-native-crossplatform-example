import locations from './location';
import { combineModules } from 'redux-modules';

/*
  Combine Reducers with two major differences:
      uses an array for easy transforms
      recursive
      doesn't match on entire action type
*/
const reducers = combineModules([
  todos,
  locations,
  // But with magic to help namespace nested reducer actions
  // For composition
  combineModules('locationTodos', {
    // actions get namespaced eg:
    // locationTodos.locations/CREATE corresponds to the deeply combined reducer
    locations,
    todos,
  }),
]);

// GENERATES THE FOLLOWING REDUCERS:

// 1) action.type = CREATE
// 2) action.type = CREATE
const todos = (state, action) => {
  const [current, ... rest] = action.type.split('.');
  const newAction = { ...action, type: rest.join('.') };
  switch (current) {
    case 'CREATE':
      return todoReducer.create(state, newAction);
    case 'DESTROY':
      return todoReducer.destroy(state, newAction);
    default:
      return state;
  }
};


// 1) action.type = locations.CREATE
const nestedReducer = (state, action) => {
  const [current, ... rest] = action.type.split('.');
  const newAction = { ...action, type: rest.join('.') };
  switch (current) {
    case 'locations':
      return locations(state, newAction);
    case 'todos':
      return todos(state, newAction);
    default:
      return state;
  }
};

// 1) action.type = locationTodo.locations.CREATE
// 2) action.type = locations.CREATE
const reducer = (state, action) => {
  const [current, ... rest] = action.type.split('.');
  const newAction = { ...action, type: rest.join('.') };
  switch (current) {
    case 'todos':
      return todos(state, newAction);
    case 'locations':
      return todos(state, newAction);
    case 'locationTodos':
      return nestedReducer(state, newAction);
    default:
      return state;
  }
};

export default reducers;
