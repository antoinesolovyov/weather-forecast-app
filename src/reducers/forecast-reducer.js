import {
  FETCH_FORECAST_BEGIN,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
  FETCH_LOCATION_BEGIN,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_FAILURE,
  SET_CURRENT_POSITION
} from 'actions/forecast-actions'

export const initialState = {
  forecast: [],
  location: '',
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
    case FETCH_LOCATION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        location: action.payload
      }
    case FETCH_LOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        location: ''
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
