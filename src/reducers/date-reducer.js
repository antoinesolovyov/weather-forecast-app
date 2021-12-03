const initialState = {
  date: new Date()
}

export const dateReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'SET_DATE':
      return {
        date: action.payload
      }
    default:
      return state
  }
}
