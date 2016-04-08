// import { createSelector, createStructuredSelector } from 'reselect';

export default function mapState(state) {
  return {
    todos: [... state.toJS()],
  };
}
