import { createModule } from 'redux-modules';
import { Map, fromJS } from 'immutable';
import { v4 } from 'uuid';

const api = {};
const session = {};
const log = {};


export default createModule({
  name: 'locations',
  initialState: Map(),
  transformations: [
    {
      action: 'CREATE',
      reducer: (state, { payload }) => {
        const location = { id: v4(), ... payload };
        return state.setIn(['collection', location.id], fromJS(location));
      },
      effects: (actions, { payload: { id } }) => [
        /* Async effect */
        [
          // Async function
          api.create(id),
          // Success Effect(s)
          [actions.createSuccess, session.actions.updateLocationCount],
          // Failure Effect
          actions.createFailure,
        ],
        /* Sync effect */
        log.action('create', id),
      ],
    },
    {
      action: 'CREATE_SUCCESS',
      reducer: state => state.set('_loading', false),
    },
    {
      action: 'CREATE_FAILURE',
      reducer: (state, { payload }) =>
        state
        .set('_loading', false)
        .set('_errors', payload),
    },
  ],
});
