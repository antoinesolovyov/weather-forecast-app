export const FETCH_LOCATION_BEGIN = 'FETCH_LOCATION_BEGIN'
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'
export const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE'

export const fetchLocationBegin = () => ({
  type: FETCH_LOCATION_BEGIN
})

export const fetchLocationSuccess = (location) => ({
  type: FETCH_LOCATION_SUCCESS,
  payload: location
})

export const fetchLocationFailure = (error) => ({
  type: FETCH_LOCATION_FAILURE,
  payload: { error }
})
