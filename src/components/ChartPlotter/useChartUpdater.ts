import { useCallback, useReducer } from 'react'

enum Actions {
  APPEND,
}

interface Action {
  type: Actions
  value: number
}

function reducer(state: number[], action: Action) {
  const { value, type } = action

  switch (type) {
    case Actions.APPEND:
      return [...state, value]
    default:
      return state
  }
}

export const useChartUpdater = (initialData = []) => {
  const [data, dispatch] = useReducer(reducer, initialData)

  const append = useCallback((value: number) => {
    dispatch({ type: Actions.APPEND, value })
  }, [])

  return {
    data,
    append,
  }
}
