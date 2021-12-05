import { SET_VALUE } from 'actions/input-actions'

const initialState = {
  value: ''
}

export function inputReducer (state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        value: action.payload
      }
    default:
      return state
  }
}
