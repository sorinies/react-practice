import React from 'react'
import withLoading from './withLoading'

/*export default */function Input() {
  return (
      <input defaultValue="input" />
  )
}
export default withLoading(Input);
