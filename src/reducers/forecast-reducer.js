import {
  FETCH_FORECAST_BEGIN,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} from 'actions/forecast-actions'

export const initialState = {
  forecast: [],
  loading: false,
  error: null
}

export const forecastReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECAST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        forecast: action.payload
      }
    case FETCH_FORECAST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        forecast: []
      }
    default:
      return state
  }
}
