export const forecastState = {
  timezone: '',
  forecast: []
}

export const forecastReducer = function (state = forecastState, action) {
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

export const dateState = {
  date: new Date()
}

export const dateReducer = function (state = dateState, action) {
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
