import { createModule } from 'redux-modules';
import { fromJS } from 'immutable';
import { v4 } from 'uuid';

const uuidMiddleware = (_, { payload, meta }) => {
  const location = { id: v4(), ... payload };
  return {
    payload: location,
    meta,
  };
};

export default createModule({
  name: 'locations',
  initialState: fromJS({ collection: {}, _loading: false }),
  transformations: [
    {
      action: 'CREATE',
      middleware: [uuidMiddleware],
      reducer: (state, { payload }) =>
        state.setIn(['collection', payload.id], fromJS(payload)),
    },
    {
      action: 'DESTROY',
      reducer: (state, { payload: { id } }) =>
        state.deleteIn(['collection', id]),
    },
    {
      action: 'UPDATE',
      reducer: (state, { payload: { id, updates } }) =>
        state.mergeIn(['collection', id], fromJS(updates)),
    },
    {
      action: 'HYDRATE',
      reducer: state => state.set('_loading', true),
    },
    {
      action: 'HYDRATE_SUCCESS',
      reducer: (state, { payload }) =>
        state.set('collection', fromJS(payload)).set('_loading', false),
    },
    {
      action: 'HYDRATE_ERROR',
      reducer: (state, { payload }) =>
        state
        .set('_loading', 'false')
        .set('_error', payload),
    },
  ],
});
