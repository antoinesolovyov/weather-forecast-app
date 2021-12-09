import { SET_DATE } from 'actions/date-actions'

const initialState = {
  date: new Date()
}

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        date: action.payload
      }
    default:
      return state
  }
}
