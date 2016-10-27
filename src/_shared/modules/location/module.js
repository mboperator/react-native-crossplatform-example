import { createModule } from 'redux-modules';
import { fromJS } from 'immutable';
import { v4 } from 'uuid';
import selector from './selector';

const uuidMiddleware = ({ payload, meta, type }) => {
  const location = { id: v4(), ... payload };
  return {
    type,
    payload: location,
    meta,
  };
};

export default createModule({
  name: 'locations',
  selector,
  initialState: fromJS({ collection: {}, _loading: false }),
  transformations: [
    {
      type: 'CREATE',
      middleware: [uuidMiddleware],
      reducer: (state, { payload }) =>
        state.setIn(['collection', payload.id], fromJS(payload)),
    },
    {
      type: 'DESTROY',
      reducer: (state, { payload: { id } }) =>
        state.deleteIn(['collection', id]),
    },
    {
      type: 'UPDATE',
      reducer: (state, { payload: { id, updates } }) =>
        state.mergeIn(['collection', id], fromJS(updates)),
    },
    {
      type: 'HYDRATE',
      reducer: state => state.set('_loading', true),
    },
    {
      type: 'HYDRATE_SUCCESS',
      reducer: (state, { payload }) =>
        state.set('collection', fromJS(payload)).set('_loading', false),
    },
    {
      type: 'HYDRATE_ERROR',
      reducer: (state, { payload }) =>
        state
        .set('_loading', 'false')
        .set('_error', payload),
    },
  ],
});
