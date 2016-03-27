import React from 'react';
import { connect } from 'react-redux';
import { curry } from 'ramda';

import dispatch from './dispatch';
import selector from './selector';

function createInterface(namespace, Component) {
  const Interface = props => {
    let formattedProps;

    if (namespace) {
      formattedProps = { [namespace]: { ...props } };
    } else {
      formattedProps = props;
    }

    return (
      <Component {...formattedProps} />
    );
  };

  return connect(
    selector,
    dispatch
  )(Interface);
}

export default curry(createInterface);
