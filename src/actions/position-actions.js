export const FETCH_POSITION_BEGIN = 'FETCH_POSITION_BEGIN'
export const FETCH_POSITION_SUCCESS = 'FETCH_POSITION_SUCCESS'
export const FETCH_POSITION_FAILURE = 'FETCH_POSITION_FAILURE'

export const fetchPositionBegin = () => ({
  type: FETCH_POSITION_BEGIN
})

export const fetchPositionSuccess = (position) => ({
  type: FETCH_POSITION_SUCCESS,
  payload: position
})

export const fetchPositionFailure = (error) => ({
  type: FETCH_POSITION_FAILURE,
  payload: { error }
})
