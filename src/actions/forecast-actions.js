export const FETCH_FORECAST_BEGIN = 'FETCH_FORECAST_BEGIN'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'
export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE'
export const SET_CURRENT_POSITION = 'SET_CURRENT_POSITION'
export const SET_TIMEZONE = 'SET_TIMEZONE'

export const fetchForecastBegin = () => ({
  type: FETCH_FORECAST_BEGIN
})

export const fetchForecastSuccess = (forecast) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: forecast
})

export const fetchForecastFailure = (error) => ({
  type: FETCH_FORECAST_FAILURE,
  payload: { error }
})

export const setCurrentPosition = (position) => ({
  type: SET_CURRENT_POSITION,
  payload: position
})

export const setTimezone = (position) => ({
  type: SET_CURRENT_POSITION,
  payload: position
})
