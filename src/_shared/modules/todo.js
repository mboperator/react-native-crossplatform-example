/*
 * state = [
 *   { description, index },
 *   { description, index },
 * ]
 */

import { createModule } from 'redux-modules';
import { PropTypes } from 'react';
import { fromJS, List } from 'immutable';

const module = createModule({
  name: 'todos',
  initialState: List(),
  transformations: [
    {
      action: 'CREATE',
      payloadTypes: {
        todo: PropTypes.shape({
          description: PropTypes.string.isRequired,
        }),
      },
      reducer: (state, { payload: { todo } }) =>
        state.push(fromJS(todo)),
    },
    {
      action: 'DESTROY',
      payloadTypes: {
        index: PropTypes.number.isRequired,
      },
      reducer: (state, { payload: { index } }) =>
        state.delete(index),
    },
    {
      action: 'UPDATE',
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

export const { actions, constants, reducer } = module;
export default module;
