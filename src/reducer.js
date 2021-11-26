const initialState = {
  timezone: '',
  forecast: []
}

export const forecastReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'SET_TIMEZONE':
      return {
        ...state,
        timezone: action.payload
      }
    case 'SET_FORECAST':
      return {
        ...state,
        forecast: action.payload
      }
    default:
      return state
  }
}

export const dateReducer = function (state = { date: new Date() }, action) {
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
