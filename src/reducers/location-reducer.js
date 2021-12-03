import {
  FETCH_LOCATION_BEGIN,
  FETCH_LOCATION_SUCCESS,
  FETCH_LOCATION_FAILURE
} from 'actions/location-actions'

export const initialState = {
  location: '',
  loading: false,
  error: null
}

export const locationReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        location: action.payload,
        loading: false
      }
    case FETCH_LOCATION_FAILURE:
      return {
        location: '',
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}
