import { getWeatherUrl, getWeatherLocationUrl, getGeocodeUrl } from './urls'
import {
  fetchForecastBegin, fetchForecastSuccess, fetchForecastFailure,
  fetchLocationBegin, fetchLocationSuccess, fetchLocationFailure,
  setCurrentPosition
} from '../actions/forecast-actions'

export async function getPosition (dispatch) {
  await navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords

    dispatch(setCurrentPosition({ latitude, longitude }))
  })
}

export const fetchForecast = ({ latitude, longitude }) => async (dispatch) => {
  dispatch(fetchForecastBegin())

  try {
    const response = await fetch(getWeatherUrl(latitude, longitude))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()

    const { daily } = json
    const forecast = []
    for (let i = 0; i < 7; i++) {
      forecast[i] = {
        ...daily[i].weather[0],
        temp: daily[i].temp
      }
    }

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

export const fetchForecastByLocation = (location) => async (dispatch) => {
  dispatch(fetchForecastBegin())

  try {
    const response = await fetch(getWeatherLocationUrl(location))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()

    const { daily } = json
    const forecast = []
    for (let i = 0; i < 7; i++) {
      forecast[i] = {
        ...daily[i].weather[0],
        temp: daily[i].temp
      }
    }

    dispatch(fetchForecastSuccess(forecast))
  } catch (error) {
    dispatch(fetchForecastFailure(error))
  }
}

export const fetchLocation = ({ latitude, longitude }) => async (dispatch) => {
  dispatch(fetchLocationBegin())

  try {
    const response = await fetch(getGeocodeUrl(latitude, longitude))

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

export const loadForecast = ({ latitude, longitude }) => (dispatch, getState) => {
  console.log(getState())
  const date = new Date()
  const item = JSON.parse(localStorage.getItem(`${latitude.toFixed(2)}:${longitude.toFixed(2)},${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`))

  dispatch(fetchForecastSuccess(item.forecast))
}
