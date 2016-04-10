// import { createSelector, createStructuredSelector } from 'reselect';

export default function mapState(state) {
  return {
    data: [... state.todo.toJS()],
  };
}
