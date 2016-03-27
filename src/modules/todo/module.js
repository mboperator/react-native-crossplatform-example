/*
 * state = [
 *   { description, index },
 *   { description, index },
 * ]
 */

import createModule from '../../src/index';
import { PropTypes } from 'react';
import { fromJS, List } from 'immutable';

const { actions, reducer } = createModule({
  name: 'todos',
  initialState: List(),
  transformations: [
    {
      action: 'CREATE_TODO',
      payloadTypes: {
        todo: PropTypes.shape({
          description: PropTypes.string.isRequired,
        }),
      },
      reducer: (state, { payload: { todo } }) =>
        state.push(fromJS(todo)),
    },
    {
      action: 'DESTROY_TODO',
      payloadTypes: {
        index: PropTypes.number.isRequired,
      },
      reducer: (state, { payload: { index } }) =>
        state.delete(index),
    },
    {
      action: 'UPDATE_TODO',
      payloadTypes: {
        index: PropTypes.number.isRequired,
        todo: PropTypes.shape({
          description: PropTypes.string,
          checked: PropTypes.bool,
        }),
      },
      reducer: (state, { payload: { index, todo: updates } }) =>
        state.update(index, todo => todo.merge(fromJS(updates))),
    },
  ],
});

export {
  actions,
  reducer as default,
};
