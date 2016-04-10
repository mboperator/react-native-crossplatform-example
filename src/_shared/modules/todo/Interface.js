import { connect } from 'react-redux';
import { curry } from 'ramda';

import dispatch from './dispatch';
import selector from './selector';
import combineNamespacedProps from 'utils/combineNamespacedProps';

function createInterface(namespace = '', Component) {
  return connect(
    selector,
    dispatch,
    combineNamespacedProps(namespace)
  )(Component);
}

export default curry(createInterface);
