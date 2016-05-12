/*
 * state.users = {
 *   _loading: bool,
 *   collection: {
 *     {
 *       id: string,
 *       name: string,
 *     }
 *   }
 * }
 */

import { createModule } from 'redux-modules';
import { PropTypes } from 'react';
import { fromJS, Map } from 'immutable';

const { shape, string, arrayOf } = PropTypes;

const module = createModule({
  name: 'users',
  initialState: Map(),
  transformations: [
    {
      action: 'FETCH',
      reducer: state => state.set('_loading', true),
    },
    {
      action: 'FETCH_SUCCESS',
      payloadTypes: {
        data: arrayOf(
          shape({
            id: string,
            name: string,
          })
        ),
      },
      reducer: (state, { payload: { data } }) =>
        state
          .set('_loading', false)
          .set('collection', fromJS(data)),

    },
    {
      action: 'FETCH_ERROR',
      reducer: state => state.set('_loading', false),
    },
  ],
});

export const { actions, constants, reducer } = module;
export default module;
