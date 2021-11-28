const initialState = {
  date: new Date()
}

export const dateReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        date: action.payload
      }
    default:
      return state
  }
}
