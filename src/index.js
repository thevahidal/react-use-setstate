import * as React from 'react'

import { isFunction } from './utils'

const useSetState = (initialState = {}) => {
  const [state, setState] = React.useReducer(
    (state, newState) => {
      const newWithPrevState = isFunction(newState) ? newState(state) : newState
      return (
        {...state, ...newWithPrevState}
      )
    },
    initialState
  )

  return [state, setState]
}


export default useSetState