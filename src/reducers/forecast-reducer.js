import {
  FETCH_FORECAST_BEGIN,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
  SET_CURRENT_POSITION,
  SET_TIMEZONE
} from 'actions/forecast-actions'

export const initialState = {
  timezone: '',
  forecast: [],
  position: {
    latitude: 0,
    longitude: 0
  },

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
    case SET_TIMEZONE:
      return {
        ...state,
        timezone: action.payload
      }
    case SET_CURRENT_POSITION:
      return {
        ...state,
        position: action.payload
      }
    default:
      return state
  }
}
