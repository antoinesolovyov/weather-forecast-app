export const FETCH_FORECAST_BEGIN = 'FETCH_FORECAST_BEGIN'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'
export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE'

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
