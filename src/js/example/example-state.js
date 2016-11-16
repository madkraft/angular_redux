//-------------------------------------------------------------------
// Actions
//-------------------------------------------------------------------
export const ExampleActions = () => {
  const getExamples = examples => {
    return { type: 'GET_EXAMPLES', payload: examples }
  }

  const selectExample = example => {
    return { type: 'GET_CURRENT_EXAMPLE', payload: example }
  }

  return {
    getExamples,
    selectExample
  }
}

//-------------------------------------------------------------------
// Reducers
//-------------------------------------------------------------------
export const initialExamples = [
  {"id": 0, "name": "Development"},
  {"id": 1, "name": "Design"},
  {"id": 2, "name": "Exercise"},
  {"id": 3, "name": "Humor"}
]

export const examples = (state = initialExamples, {type, payload}) => {
  switch (type) {
    case 'GET_EXAMPLES':
      return payload || state
    default:
      return state
  }
}

export const example = (state = {}, {type, payload}) => {
  switch (type) {
    case 'GET_CURRENT_EXAMPLE':
      return payload || state
    default:
      return state
  }
}