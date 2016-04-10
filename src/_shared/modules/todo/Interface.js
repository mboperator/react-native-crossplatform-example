import { connect } from 'react-redux';

import dispatch from './dispatch';
import selector from './selector';
import combineNamespacedProps from '../../utils/combineNamespacedProps';

const createInterface = (namespace = '') => Component =>
  connect(
    selector,
    dispatch,
    combineNamespacedProps(namespace)
  )(Component);

export default createInterface;
