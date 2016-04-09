import { actions } from './module';

export default function mapDispatch(dispatch) {
  return {
    actions: {
      createTodo: todo => dispatch(actions.createTodo({ todo })),
      destroyTodo: index => dispatch(actions.destroyTodo({ index })),
      updateTodo: (index, todo) =>
        dispatch(actions.updateTodo({ index, todo })),
    }
  };
}
