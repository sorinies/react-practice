import React from 'react'
import withLoading from './withLoading';

/* export default */function Button() {
  return <button>Button</button>;
}

export default withLoading(Button);