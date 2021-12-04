const initialState = {
  value: ''
}

export const inputReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        value: action.payload
      }
    default:
      return state
  }
}
