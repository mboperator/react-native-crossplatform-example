import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import { v4 } from 'uuid';

export default createModule({
  name: 'locations',
  initialState: Map(),
  transformations: [
    {
      action: 'CREATE',
      reducer: (state, { payload }) => {
        const id = v4();
        return state.collection.set(id, { id, ... payload });
      },
    },
    {
      action: 'DESTROY',
      reducer: (state, { payload: { id } }) =>
        state.collection.delete(id),
    },
  ],
});
