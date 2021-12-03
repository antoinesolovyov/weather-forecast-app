import {
  getWeatherUrl,
  getGeocodeUrl,
  getReverseGeocodeUrl
} from './urls'

import {
  fetchForecastBegin,
  fetchForecastSuccess,
  fetchForecastFailure
} from 'actions/forecast-actions'

import {
  fetchPositionBegin,
  fetchPositionSuccess,
  fetchPositionFailure
} from 'actions/position-actions'

import {
  fetchLocationBegin,
  fetchLocationSuccess,
  fetchLocationFailure
} from 'actions/location-actions'

export const fetchForecast = ({ latitude, longitude }) => async (dispatch) => {
  dispatch(fetchForecastBegin())

  try {
    const response = await fetch(getWeatherUrl(latitude, longitude))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()

    const forecast = [json.current, ...json.daily]

    const date = new Date()
    localStorage.setItem(
      `${latitude.toFixed(2)}:${longitude.toFixed(2)},${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
      JSON.stringify({ forecast })
    )

    dispatch(fetchForecastSuccess(forecast))
  } catch (error) {
    dispatch(fetchForecastFailure(error))
  }
}

export const loadForecast = ({ latitude, longitude }) => (dispatch, getState) => {
  console.log(getState())
  const date = new Date()
  const item = JSON.parse(localStorage.getItem(`${latitude.toFixed(2)}:${longitude.toFixed(2)},${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`))

  dispatch(fetchForecastSuccess(item.forecast))
}

export async function getPosition (dispatch) {
  await navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords

    dispatch(fetchPositionSuccess({ latitude, longitude }))
  })
}

export const fetchLocation = ({ latitude, longitude }) => async (dispatch) => {
  dispatch(fetchLocationBegin())

  try {
    const response = await fetch(getReverseGeocodeUrl(latitude, longitude))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()

    const location = json?.plus_code?.compound_code
    dispatch(fetchLocationSuccess(location))
  } catch (error) {
    dispatch(fetchLocationFailure(error))
  }
}

export const fetchPostition = (location) => async (dispatch) => {
  dispatch(fetchPositionBegin())

  try {
    const response = await fetch(getGeocodeUrl(location))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()

    const latitude = json?.results[0]?.geometry.location.lat
    const longitude = json?.results[0]?.geometry.location.lng

    dispatch(fetchPositionSuccess({ latitude, longitude }))
  } catch (error) {
    dispatch(fetchPositionFailure(error))
  }
}
