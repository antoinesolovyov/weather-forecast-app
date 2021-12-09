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

export const forecastReducer = (state = initialState, action) => {
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
        forecast: action.payload,
        loading: false
      }
    case FETCH_FORECAST_FAILURE:
      return {
        forecast: [],
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}
