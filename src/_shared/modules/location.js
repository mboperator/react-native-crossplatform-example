import { createModule } from 'redux-modules';
import { Map, fromJS } from 'immutable';
import { v4 } from 'uuid';

export default createModule({
  name: 'locations',
  initialState: Map(),
  transformations: [
    {
      action: 'CREATE',
      reducer: (state, { payload }) => {
        const location = { id: v4(), ... payload };
        return state.collection.set(location.id, fromJS(location));
      },
    },
    {
      action: 'DESTROY',
      reducer: (state, { payload: { id } }) =>
        state.collection.delete(id),
    },
    {
      action: 'UPDATE',
      reducer: (state, { payload: { id, updates } }) =>
        state.collection.merge(id, fromJS(updates)),
    },
    {
      action: 'HYDRATE',
      reducer: (state, { payload }) =>
        state.set('collection', fromJS(payload)),
    },
  ],
});
