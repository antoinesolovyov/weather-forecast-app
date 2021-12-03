import {
  FETCH_POSITION_BEGIN,
  FETCH_POSITION_SUCCESS,
  FETCH_POSITION_FAILURE
} from 'actions/position-actions'

export const initialState = {
  position: {
    latitude: 0,
    longitude: 0
  },
  loading: false,
  error: null
}

export const positionReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSITION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_POSITION_SUCCESS:
      return {
        ...state,
        position: action.payload,
        loading: false
      }
    case FETCH_POSITION_FAILURE:
      return {
        position: {
          latitude: 0,
          longitude: 0
        },
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}
