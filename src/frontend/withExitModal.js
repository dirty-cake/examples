import React, { useEffect } from 'react';
import { useMouseLeave } from './useMouseLeave.js';

const withExitModal = (WrappedComponent) => (props) => {
  const mouseLeave = useMouseLeave();
  useEffect(() => {
    if (!props.showModal && mouseLeave) {
      props.switchModal('exit');
    }
  }, [!props.showModal && mouseLeave]);

  return <WrappedComponent {...props} />;
};

export default withExitModal;